import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Player } from './components/Player';
import { Menu } from './components/Menu';
import { useStore } from '../../hooks';
import { COLORS } from '../../constants/colors';
import { Timer } from '../../components/Timer';

export const Game = ({ navigation }: { navigation: any }) => {
  const { store } = useStore();

  return (
    <SafeAreaView style={styles.root}>
      <Menu navigation={navigation} />
      <FlatList
        style={styles.list}
        data={store.players}
        renderItem={({ item }) => <Player key={item.order} player={item} />}
      />
      <Timer />
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
  list: {
    padding: 12
  }
});
