import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Timer = ({ onReset }) => {
  const [phaseIndex, setPhaseIndex] = useState(0); // Initial phase index is 0 (Work phase)
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(25 * 60); // Set initial time to 25 minutes (Work phase)
  const phases = [
    { name: 'Tomatoes ', duration: 25 * 60, color: 'red' },
    { name: 'Short Break', duration: 5 * 60, color: 'coral' },
    { name: 'Long Break', duration: 15 * 60, color: 'darkcyan' },
  ];

  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const currentPhase = phases[phaseIndex];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setPhaseIndex(0); // Reset phase index to Work phase
    setSeconds(25 * 60); // Reset time to 25 minutes (Work phase)
    setIsRunning(false);
    onReset(); // Call the onReset function passed from the parent component
  };

  const handleNextPhase = () => {
    const nextPhaseIndex = (phaseIndex + 1) % phases.length;
    setPhaseIndex(nextPhaseIndex);
    setSeconds(phases[nextPhaseIndex].duration);
    setIsRunning(false);
    onReset(); // Call the onReset function passed from the parent component
  };

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { borderColor: currentPhase.color }]}>
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        <Text style={[styles.phaseText, { color: currentPhase.color }]}>{currentPhase.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isRunning ? styles.stopButton : styles.startButton]}
          onPress={handleStartStop}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: currentPhase.color }]}
          onPress={handleNextPhase}
        >
          <Text style={styles.buttonText}>{phaseIndex === 2 ? 'Restart' : 'Next Phase'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phaseText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 20,
    width: 150,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  startButton: {
    backgroundColor: 'green',
  },
  stopButton: {
    backgroundColor: 'red',
  },
});

export default Timer;
