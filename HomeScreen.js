import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/background1.webp')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>WHICH ROLE SUITS YOU?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Parent', { role: 'Parent' })}
        >
          <Image source={require('./assets/parent.png')} style={styles.icon} />
          <Text style={styles.buttonText}>I am a Parent/Guardian!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Student', { role: 'Student' })}
        >
          <Image source={require('./assets/student.png')} style={styles.icon} />
          <Text style={styles.buttonText}>I am a Student!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#FF0000', marginBottom: 20 },
  button: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 15, marginVertical: 10, borderRadius: 10, width: '80%' },
  icon: { width: 50, height: 50, marginRight: 10 },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
});
