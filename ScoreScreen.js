import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function ScoreScreen({ route, navigation }) {
  const { score, total, role } = route.params; // Get role, score, and total from route.params

  const handlePlayAgain = () => {
    navigation.navigate('HowToPlay', { role }); // Pass role back to HowToPlay screen
  };

  const handleBackToHome = () => {
    navigation.navigate('Home'); // Navigate to Home screen
  };

  const handleAttemptHistory = () => {
    navigation.navigate('AttemptHistory', { role }); // Navigate to Attempt History screen
  };

  return (
    <ImageBackground source={require('./assets/background1.webp')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Your Score</Text>
        <Text style={styles.scoreText}>
          {score} / {total}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePlayAgain}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>

          {/* Show Attempt History button only for Parent role */}
          {role === 'Parent' && (
            <TouchableOpacity style={styles.button} onPress={handleAttemptHistory}>
              <Text style={styles.buttonText}>Attempt History</Text>
            </TouchableOpacity>
          )}
        </View>
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
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
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
});
