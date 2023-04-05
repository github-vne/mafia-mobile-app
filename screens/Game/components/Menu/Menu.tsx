import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

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
      <FontAwesome color="#fff" size={24} name="male" />
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
