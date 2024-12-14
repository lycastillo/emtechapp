import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function ParentScreen({ navigation, route }) {
  const [childName, setChildName] = useState('');
  const [childGrade, setChildGrade] = useState('');

  const handleContinue = () => {
    navigation.navigate('Loading', {
      name: childName,
      grade: childGrade,
      role: route.params.role,
    });
  };

  return (
    <ImageBackground source={require('./assets/background1.webp')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>WELCOME PARENT!</Text>
        <View style={styles.inputBox}>
          <Text style={styles.label}>What is your child's name?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your child's name"
            value={childName}
            onChangeText={setChildName}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>What is your child's Grade Level?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your child's grade level"
            value={childGrade}
            onChangeText={setChildGrade}
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
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
  inputBox: {
    width: '90%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
