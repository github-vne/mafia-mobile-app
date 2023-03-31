import { Button, FlatList, StyleSheet, View } from 'react-native';
import { Player } from './components/Player';
import { useStore } from '../../hooks';

export const Players = ({ navigation }: { navigation: any }) => {
  const { store } = useStore();

  return (
    <View style={styles.root}>
      <FlatList
        data={store.players}
        renderItem={({ item }) => <Player key={item.order} player={item} />}
      />
      <Button
        title="Get roles"
        onPress={() => navigation.navigate('Distribution')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 6,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 16,
    paddingBottom: 32
  }
});
