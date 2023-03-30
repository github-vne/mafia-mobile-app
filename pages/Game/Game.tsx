import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TPlayer } from '../../types/player';
import { Player } from './components/Player';
import { Timer } from './components/Timer';
import { Menu } from './components/Menu';
import { useStore } from '../../hooks';

export const Game = ({ navigation }: { navigation: any }) => {
  const { store } = useStore();

  return (
    <View style={styles.root}>
      <Menu />
      <FlatList
        style={styles.list}
        data={store.players}
        renderItem={({ item }) => <Player key={item.order} player={item} />}
      />
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 8,
    padding: 12,
    paddingBottom: 16
  },
  list: {
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: -12,
    marginLeft: -12
  }
});
