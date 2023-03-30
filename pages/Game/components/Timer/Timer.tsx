import { Button, StyleSheet, Text, View } from 'react-native';

import React, { useState, useRef } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<any>(null);

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(60);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.timer}>{time} s</Text>
      <View style={styles.timerAction}>
        {!isRunning ? (
          <Button title="Start" onPress={handleStart} />
        ) : (
          <>
            <Button title="Stop" onPress={handleStop} />
            <Button
              title={isRunning ? 'Pause' : 'Continue'}
              onPress={handlePause}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    padding: 8
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  timerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
});
