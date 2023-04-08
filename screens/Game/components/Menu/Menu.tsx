import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStore } from '../../../../hooks';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../../constants/colors';

export const Menu = ({ navigation }: { navigation: any }) => {
  const {
    store,
    updateIsShowRoles,
    resetPlayersVote,
    updateIsVoteMode,
    handleResetGame
  } = useStore();

  const handleVote = (e: any) => {
    e.stopPropagation();
    updateIsShowRoles(!store.isShowRoles);
  };

  const handleFinishGame = () => {
    return Alert.alert(
      'Завершение игры',
      'Вы уверены, что хотите завершить данную игру?',
      [
        {
          text: 'Завершить игру',
          onPress: () => {
            handleResetGame();
            navigation.navigate('Home');
          }
        },
        {
          text: 'Отмена',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ]
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.bg} />
      <TouchableWithoutFeedback onPress={handleVote}>
        <FontAwesome
          color={store.isShowRoles ? COLORS.red : COLORS.brown}
          size={24}
          name="eye"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={updateIsVoteMode}>
        <FontAwesome
          color={store.isVoteMode ? COLORS.red : COLORS.brown}
          size={24}
          name="thumbs-up"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={resetPlayersVote}>
        <FontAwesome color={COLORS.brown} size={24} name="male" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleFinishGame}>
        <FontAwesome color={COLORS.brown} size={24} name="home" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
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
