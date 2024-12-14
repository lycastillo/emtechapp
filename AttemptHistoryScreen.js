import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function AttemptHistoryScreen({ route }) {
  const { role } = route.params;

  return (
    <ImageBackground source={require('./assets/background1.webp')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Attempt History</Text>
        <Text style={styles.infoText}>
        
        </Text>
        {/* Example placeholder for attempts */}
        <View style={styles.attemptsContainer}>
          <Text style={styles.attemptText}>Date: 2024-12-14, Score: 3/4</Text>
          <Text style={styles.attemptText}>Date: 2024-12-13, Score: 2/4</Text>
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
  infoText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  attemptsContainer: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  attemptText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
});
