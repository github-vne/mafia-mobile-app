import { Button, StyleSheet, Text, View } from 'react-native';

import React, { useState, useRef, useCallback, useEffect } from 'react';

export const Timer = ({ sec = 60 }: { sec?: number }) => {
  const [time, setTime] = useState(sec);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<any>(null);

  const handleStart = useCallback(() => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setTime(sec);
  }, [sec]);

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(sec);
  };

  useEffect(() => {
    if (!time) handleStop();
  }, [time]);

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <View style={styles.root}>
      <Text style={[styles.timer, time <= 10 && styles.warning]}>
        {time} sec
      </Text>
      <View style={styles.timerAction}>
        {!isRunning ? (
          <Button
            title={time !== sec ? 'Continue' : 'Start'}
            onPress={handleStart}
          />
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
    backgroundColor: '#3B3F58',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  warning: {
    color: 'red'
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  timerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
});
