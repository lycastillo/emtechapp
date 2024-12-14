import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import StudentScreen from './StudentScreen';
import ParentScreen from './ParentScreen';
import LoadingScreen from './LoadingScreen';
import HowToPlayScreen from './HowToPlayScreen';
import CaptureScreen from './CaptureScreen';
import ScoreScreen from './ScoreScreen';
import AttemptHistoryScreen from './AttemptHistoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Parent" component={ParentScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="HowToPlay" component={HowToPlayScreen} />
        <Stack.Screen name="CaptureScreen" component={CaptureScreen} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
        <Stack.Screen name="AttemptHistory" component={AttemptHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
