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
      <TouchableWithoutFeedback onPress={handleVote}>
        <FontAwesome
          color="#fff"
          size={24}
          name="eye"
          style={store.isShowRoles && { color: 'green' }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={updateIsVoteMode}>
        <FontAwesome
          color={store.isVoteMode ? 'green' : '#fff'}
          size={24}
          name="thumbs-up"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={resetPlayersVote}>
        <FontAwesome color={'#fff'} size={24} name="male" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleFinishGame}>
        <FontAwesome color="#fff" size={24} name="home" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: '#3B3F58',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
