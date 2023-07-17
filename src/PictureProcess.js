import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const imageSources = [
  require('../Img/zeed.jpg'),
  require('../Img/rare.jpg'),
  require('../Img/T1.jpg'),
  require('../Img/T2.jpg'),
  require('../Img/T3.jpg'),
  require('../Img/T4.jpg'),
  require('../Img/T5.jpg'),
];

const PictureProcess = ({ onReset }) => {
  const [showCompletePicture, setShowCompletePicture] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const [randomImageIndex, setRandomImageIndex] = useState(0);

  useEffect(() => {
    setShowCompletePicture(false); // Set showCompletePicture to false initially
    setRandomImageIndex(Math.floor(Math.random() * imageSources.length)); // Generate a random index

    const timer = setTimeout(() => {
      setShowCompletePicture(true);
    }, 60 * 1000); // Set the timer to 1 minute (60 seconds)

    return () => {
      clearTimeout(timer);
    };
  }, [resetCount]); // Update the effect when resetCount changes

  useEffect(() => {
    if (showCompletePicture && onReset) {
      onReset(); // Call onReset when showCompletePicture is true
    }
  }, [showCompletePicture, onReset]);

  const handleReset = () => {
    setShowCompletePicture(false); // Reset showCompletePicture to false
    setResetCount((prevCount) => prevCount + 1); // Increment resetCount to trigger useEffect
    if (onReset) {
      onReset(); // Call onReset function from parent component
    }
  };

  return (
    <View style={styles.container}>
      {showCompletePicture ? (
        <Image source={imageSources[randomImageIndex]} style={styles.image} />
      ) : (
        <Image source={require('../Img/question.gif')} style={styles.image} />
      )}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reroll </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  resetButton: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PictureProcess;
