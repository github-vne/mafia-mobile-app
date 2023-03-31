import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Player } from './features/Player';
import { useStore } from '../../hooks';

export const Players = ({ navigation }: { navigation: any }) => {
  const { store } = useStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={store.players}
        renderItem={({ item }) => <Player key={item.order} player={item} />}
      />
      <Button
        title="Start game"
        onPress={() => navigation.navigate('Distribution')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1,
    gap: 6,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 6
  }
});
