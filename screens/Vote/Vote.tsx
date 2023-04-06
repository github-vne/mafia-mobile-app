import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { useStore } from '../../hooks';
import { COLORS } from '../../constants/colors';
import { Timer } from '../../components/Timer';
import React from 'react';
import { Header } from '../../components/Header';
import { globalStyles } from '../../constants/styles';

export const Vote = ({ navigation }: { navigation: any }) => {
  const { updatePlayer, store } = useStore();

  const handlePress = (id: string, voteCount: number) => {
    updatePlayer(id, { voteCount });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Голосование" onPress={() => navigation.navigate('Game')} />
      <FlatList
        style={styles.list}
        data={store.players}
        renderItem={({ item }) => (
          <View key={item.order} style={styles.player}>
            <View style={styles.data}>
              <Text style={[styles.text, globalStyles.bold]}>
                {item.order}.{' '}
              </Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>

            <View style={styles.data}>
              <TextInput
                inputMode="numeric"
                style={styles.input}
                value={`${item.voteCount || ''}`}
                maxLength={1}
                onChangeText={(value) => handlePress(item.id, Number(value))}
              />
            </View>
          </View>
        )}
      />
      <Timer sec={30} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 8,
    padding: 12,
    paddingBottom: 16,
    backgroundColor: COLORS.bg
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#3B3F58',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  player: {
    borderBottomWidth: 2,
    marginBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderColor: '#f2f2f2'
  },
  text: {
    color: '#fff',
    fontSize: 18
  },
  data: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#fff',
    width: 50,
    alignItems: 'center',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 20
  },
  list: {
    padding: 12
  }
});
