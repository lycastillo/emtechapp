import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CaptureScreen({ navigation, route }) {
  const { role } = route.params; // Receive the user's role from the previous screen
  const [image, setImage] = useState(null); // Selected image URI
  const [isProcessing, setIsProcessing] = useState(false); // Processing state
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // Correctness of the answer
  const [progress, setProgress] = useState(new Animated.Value(0)); // Animated loading bar progress
  const [popupOpacity] = useState(new Animated.Value(0)); // Animated popup opacity
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Current image index
  const [correctAnswers, setCorrectAnswers] = useState(0); // Track the number of correct answers

  // Images for the sequence
  const imageSequence = [
    require('./assets/apol.png'),
    require('./assets/dog.png'),
    require('./assets/ball.png'),
    require('./assets/cup.png'),
  ];

  const handleImageUpload = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3], // Optional: specify aspect ratio
      quality: 1, // Image quality
    });

    if (!result.canceled) {
      const fileUri = result.assets[0].uri;
      const fileExtension = fileUri.split('.').pop().toLowerCase(); // Extract file extension

      setImage(fileUri); // Save the selected image URI
      setIsProcessing(true); // Start processing

      // Animate progress bar
      Animated.timing(progress, {
        toValue: 100,
        duration: 3000, // Simulate 3 seconds processing
        useNativeDriver: false,
      }).start(() => {
        setIsProcessing(false); // Stop processing

        // Check file extension and set correctness
        const isCorrect = fileExtension === 'png';
        setIsAnswerCorrect(isCorrect);

        // Increment correct answers if correct
        if (isCorrect) {
          setCorrectAnswers(correctAnswers + 1);
        }

        // Animate popup display
        Animated.timing(popupOpacity, {
          toValue: 1,
          duration: 500, // Smooth transition in
          useNativeDriver: true,
        }).start();

        // Hide popup and proceed to the next image after 2 seconds
        setTimeout(() => {
          Animated.timing(popupOpacity, {
            toValue: 0,
            duration: 500, // Smooth transition out
            useNativeDriver: true,
          }).start(() => {
            setProgress(new Animated.Value(0)); // Reset progress bar
            setImage(null); // Reset uploaded image

            if (currentImageIndex < imageSequence.length - 1) {
              setCurrentImageIndex(currentImageIndex + 1); // Go to the next image
            } else {
              // Redirect to ScoreScreen when all images are done
              navigation.navigate('ScoreScreen', {
                score: correctAnswers, // Pass the total correct answers
                total: imageSequence.length, // Pass the total number of images
                role, // Pass the user's role
              });
            }
          });
        }, 2000);
      });
    }
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <ImageBackground
      source={require('./assets/background2.jpg')} // Background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>SPELL THE WORD:</Text>

        {/* Display Current Image */}
        <Image source={imageSequence[currentImageIndex]} style={styles.displayedImage} />

        {/* Upload Button */}
        <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
          <Text style={styles.buttonText}>Upload Answer</Text>
        </TouchableOpacity>

        {/* Photo Preview */}
        {image && (
          <View style={styles.previewContainer}>
            <Image source={{ uri: image }} style={styles.previewImage} />
          </View>
        )}

        {/* Processing Answer */}
        {isProcessing && (
          <View style={styles.processingContainer}>
            <Text style={styles.processingText}>Processing Answer...</Text>
            <View style={styles.loadingBarContainer}>
              <Animated.View style={[styles.loadingBar, { width: progressWidth }]} />
            </View>
          </View>
        )}

        {/* Answer Result with Animation */}
        {isAnswerCorrect !== null && (
          <Animated.View
            style={[
              styles.answerContainer,
              {
                opacity: popupOpacity, // Animated opacity
              },
            ]}
          >
            <Text style={styles.answerText}>YOUR ANSWER IS:</Text>
            <Text
              style={[
                styles.correctText,
                isAnswerCorrect ? styles.correctColor : styles.wrongColor,
              ]}
            >
              {isAnswerCorrect ? 'Correct!' : 'Wrong!'}
            </Text>
          </Animated.View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  displayedImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  previewContainer: {
    width: '80%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  processingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  processingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingBarContainer: {
    width: '80%',
    height: 10,
    backgroundColor: '#CCC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#007BFF',
  },
  answerContainer: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  correctText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  correctColor: {
    color: '#008000', // Green for correct
  },
  wrongColor: {
    color: '#FF0000', // Red for wrong
  },
});
