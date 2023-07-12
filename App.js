import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timer from './src/Timer';
import PictureProcess from './src/PictureProcess';
import NavBar from './src/NavBar';

const Tab = createBottomTabNavigator();

const App = () => {
  const [activeScreen, setActiveScreen] = useState('timer');

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <NavBar {...props} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />}>
        <Tab.Screen name="Timer" component={Timer} />
        <Tab.Screen name="Prize" component={PictureProcess} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
