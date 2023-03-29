import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isStop, setIsStop] = useState(true);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    if (!timeLeft || isStop) return;

    const intervalId = setInterval(() => {
      if (!isPause) setTimeLeft(timeLeft - 1);
    }, 1000);

    if (isStop) {
      return () => clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isStop, timeLeft, isPause]);

  const handleStop = () => {
    setIsPause(false);
    setIsStop(true);
    setTimeLeft(60);
  };

  const togglePause = () => {
    setIsPause((prev) => !prev);
  };

  const startTimer = () => {
    setIsPause(false);
    setIsStop(false);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.timer}>{timeLeft} s</Text>
      <View style={styles.timerAction}>
        {isStop ? (
          <Button title="Start" onPress={startTimer} />
        ) : (
          <>
            <Button title="Stop" onPress={handleStop} />
            <Button
              title={!isPause ? 'Pause' : 'Continue'}
              onPress={togglePause}
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
