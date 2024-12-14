import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function HowToPlayScreen({ navigation, route }) {
  const handleContinue = () => {
    navigation.navigate('CaptureScreen', { role: route.params.role }); // Pass the role
  };

  return (
    <ImageBackground
      source={require('./assets/background2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>HOW TO PLAY?</Text>

        {/* First Instruction */}
        <View style={styles.box}>
          <Image
            source={require('./assets/i1.png')}
            style={styles.image}
          />
          <Text style={styles.instruction}>
            1.) Wait for the picture to display what word you need to spell.
          </Text>
        </View>

        {/* Second Instruction */}
        <View style={styles.box}>
          <Image
            source={require('./assets/cam.png')}
            style={styles.image}
          />
          <Text style={styles.instruction}>
            2.) Capture a picture of your output and wait for the feedback!
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  instruction: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
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
    textAlign: 'center',
  },
});
