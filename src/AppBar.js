import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation(); // Initialize the useNavigation hook

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  // Add a function to navigate to the "Task" page
  const handleNavigateToTask = () => {
    navigation.navigate('Task');
    handleMenuClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuToggle} style={styles.iconContainer}>
        <AntDesign name={showMenu ? 'menu-fold' : 'menu-unfold'} size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.appTitle}>Tomatoes Timer</Text>

      <Modal
        visible={showMenu}
        transparent
        animationType="fade"
        onRequestClose={handleMenuClose}
      >
        <TouchableWithoutFeedback onPress={handleMenuClose}>
          <View style={styles.modalBackground}>
            <View style={styles.menuItemsContainer}>
              <TouchableHighlight
                underlayColor="#FFFF00" // Set the highlight color to yellow
                onPress={handleNavigateToTask} // Use the handleNavigateToTask function here
              >
                <Text style={styles.menuItem}>Task</Text>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="#FFFF00" // Set the highlight color to yellow
                onPress={() => {
                  console.log('Settings clicked');
                  handleMenuClose();
                }}
              >
                <Text style={styles.menuItem}>Settings</Text>
              </TouchableHighlight>

              <Text style={styles.creditText}>Made by: FookIT</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  appTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemsContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    width: '70%', // Set the width of the menu
  },
  menuItem: {
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: 'bold', // Use a bold font for menu items
    textAlign: 'center', // Center the text horizontally
    color: '#333', // Use a different color for menu items
  },
  creditText: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold', // Use a bold font for the credit text
    textAlign: 'center', // Center the text horizontally
    color: '#555', // Use a different color for the credit text
  },
});

export default AppBar;
