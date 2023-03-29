import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Player } from './features/Player';
import { TPlayer } from '../../types/player';

export const Players = ({ navigation }: { navigation: any }) => {
  const { players } = useSelector(
    (state: { players: { players: TPlayer[] } }) => state.players
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
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
