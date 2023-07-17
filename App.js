import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timer from './src/Timer';
import PictureProcess from './src/PictureProcess';
import NavBar from './src/NavBar';
import AppBar from './src/AppBar';

const Tab = createBottomTabNavigator();

const TimerScreen = ({ onReset }) => (
  <View style={{ flex: 1 }}>
    <AppBar onReset={onReset} />
    <Timer onReset={onReset} />
  </View>
);

const ResultScreen = ({ onReset }) => (
  <View style={{ flex: 1 }}>
    <AppBar onReset={onReset} />
    <PictureProcess onReset={onReset} />
  </View>
);

const App = () => {
  const [activeScreen, setActiveScreen] = useState('timer');
  const [resetPicture, setResetPicture] = useState(false);

  const handleResetPicture = () => {
    setResetPicture(true);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <NavBar {...props} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />}>
        <Tab.Screen name="Timer">
          {() => <TimerScreen onReset={handleResetPicture} />}
        </Tab.Screen>
        <Tab.Screen name="Result">
          {() => <ResultScreen onReset={handleResetPicture} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
