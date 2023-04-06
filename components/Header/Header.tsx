import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';

export const Header = ({
  title,
  onPress
}: {
  title: string;
  onPress?: () => void;
}) => {
  return (
    <View style={styles.root}>
      {onPress && (
        <TouchableWithoutFeedback onPress={onPress}>
          <FontAwesome color="#fff" size={24} name="arrow-circle-left" />
        </TouchableWithoutFeedback>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <FontAwesome color="#fff" size={24} name="info" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 0
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
