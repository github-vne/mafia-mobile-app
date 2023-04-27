import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import React from 'react';

interface IProps {
  order: number;
}

export const PlayerOrder = ({ order }: IProps) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{order}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: '#fff',
    width: 25,
    height: 25,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
