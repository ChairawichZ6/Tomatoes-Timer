import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.button, isFocused && styles.activeButton]}
          >
            <Text style={[styles.buttonText, isFocused && styles.activeButtonText]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  activeButton: {
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  activeButtonText: {
    color: 'red',
  },
});

export default NavBar;
