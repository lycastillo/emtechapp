import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Animated } from 'react-native';

export default function LoadingScreen({ route, navigation }) {
  const { role } = route.params;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HowToPlay', { role });
    }, 3000); // 3-second delay
  }, []);

  return (
    <ImageBackground source={require('./assets/background1.webp')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, color: '#000' },
});
