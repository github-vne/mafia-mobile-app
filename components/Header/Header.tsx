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
    <View>
      {onPress && (
        <TouchableWithoutFeedback onPress={onPress}>
          <FontAwesome color="#fff" size={24} name="arrow-circle-left" />
        </TouchableWithoutFeedback>
      )}
      <Text style={styles.root}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    padding: 24,
    paddingBottom: 0,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
