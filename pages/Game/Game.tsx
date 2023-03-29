import { Button, FlatList, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { TPlayer } from '../../types/player';
import { Player } from './components/Player';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Timer } from './components/Timer';

export const Game = ({ navigation }: { navigation: any }) => {
  const { players } = useSelector(
    (state: { players: { players: TPlayer[] } }) => state.players
  );

  return (
    <View style={styles.container}>
      <Timer />

      <FlatList
        data={players}
        renderItem={({ item }) => <Player key={item.order} player={item} />}
      />

      <View style={styles.menu}>
        <FontAwesome size={24} name="check" />
        <FontAwesome size={24} name="check" />
        <FontAwesome size={24} name="check" />
        <FontAwesome size={24} name="check" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 16
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
