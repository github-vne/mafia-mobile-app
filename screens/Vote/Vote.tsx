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

export const Vote = ({ navigation }: { navigation: any }) => {
  const { updatePlayer, votePlayers } = useStore();

  const handlePress = (id: string, voteCount: number) => {
    updatePlayer(id, { voteCount });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Голосование" onPress={() => navigation.navigate('Game')} />
      <FlatList
        style={styles.list}
        data={votePlayers}
        renderItem={({ item }) => (
          <View key={item.order} style={styles.player}>
            <View style={styles.data}>
              <Text>{item.order}. </Text>
              <Text>{item.name}</Text>
            </View>

            <View style={styles.data}>
              <TextInput
                inputMode="numeric"
                style={styles.input}
                value={`${item.voteCount}`}
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
    backgroundColor: '#fff',
    marginBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 16
  },
  data: {
    flexDirection: 'row'
  },
  input: {
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
