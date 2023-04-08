import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/colors';

export const Header = ({ title }: { title: string }) => {
  const navigate = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.bg} />
      <TouchableWithoutFeedback onPress={() => navigate.goBack()}>
        <FontAwesome color={COLORS.brown} size={24} name="arrow-circle-left" />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
      <View />
      {/*<TouchableWithoutFeedback onPress={onPress}>*/}
      {/*  <FontAwesome size={24} name="info" />*/}
      {/*</TouchableWithoutFeedback>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    position: 'relative'
  },
  title: {
    textAlign: 'center',
    color: COLORS.brown,
    fontSize: 22,
    fontWeight: 'bold'
  },
  bg: {
    position: 'absolute',
    top: -100,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.action,
    borderRadius: 30
  }
});
