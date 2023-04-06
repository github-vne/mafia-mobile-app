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
  const { store, updateIsShowRoles } = useStore();

  const handleVote = (e: any) => {
    e.stopPropagation();
    updateIsShowRoles(!store.isShowRoles);
  };

  const handleFinishGame = () => {
    return Alert.alert(
      'Завершение игры',
      'Вы уверены, что хотите завершить данную игру?',
      [
        { text: 'Завершить игру', onPress: () => console.log('OK Pressed') },
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
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Vote')}>
        <FontAwesome color="#fff" size={24} name="moon-o" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleFinishGame}>
        <FontAwesome color="#fff" size={24} name="male" />
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
