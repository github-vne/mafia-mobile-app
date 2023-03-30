import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowRoles } from '../../../../stores/game';
import { useStore } from '../../../../hooks';

export const Menu = () => {
  const { store, updateIsShowRoles } = useStore();

  const {} = useSelector(
    (state: { game: { isShowRoles: boolean } }) => state.game
  );

  const handleVote = (e: any) => {
    e.stopPropagation();
    updateIsShowRoles(!store.isShowRoles);
  };

  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback onPress={handleVote}>
        <FontAwesome
          size={24}
          name="eye"
          style={store.isShowRoles && { color: 'green' }}
        />
      </TouchableWithoutFeedback>
      <FontAwesome size={24} name="arrow-circle-left" />
      <FontAwesome size={24} name="check" />
      <FontAwesome size={24} name="check" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
