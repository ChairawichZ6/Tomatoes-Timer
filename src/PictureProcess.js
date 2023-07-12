import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PictureProcess = () => {
  const [showCompletePicture, setShowCompletePicture] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompletePicture(true);
    }, 60 * 1000); // Set the timer to 1 minute (60 seconds)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      {showCompletePicture ? (
        <Image source={require('../Img/zeed.jpg')} style={styles.image} />
      ) : (
        <Image source={require('../Img/question.gif')} style={styles.image} />
      )}
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
});

export default PictureProcess;
