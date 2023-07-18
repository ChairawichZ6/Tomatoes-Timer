import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Timer from "./src/Timer";
import PictureProcess from "./src/PictureProcess";
import Task from "./src/Task"; // Import the Task component
import NavBar from "./src/NavBar";
import AppBar from "./src/AppBar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const ButtomTab = () => {
  const [activeScreen, setActiveScreen] = useState("timer");
  const [resetPicture, setResetPicture] = useState(false);

  const handleResetPicture = () => {
    setResetPicture(true);
  };
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <NavBar
          {...props}
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
      )}
    >
      <Tab.Screen name="Timer">
        {() => <TimerScreen onReset={handleResetPicture} />}
      </Tab.Screen>
      <Tab.Screen name="Result">
        {() => <ResultScreen onReset={handleResetPicture} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Timer" component={ButtomTab} options={{headerShown : false}} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
