import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Player } from './components/Player';
import { Menu } from './components/Menu';
import { useStore } from '../../hooks';
import { COLORS } from '../../constants/colors';
import { Timer } from '../../components/Timer';

export const Game = ({ navigation }: { navigation: any }) => {
  const { store, votePlayers } = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Menu navigation={navigation} />
            <FlatList
              style={styles.list}
              data={store.isVoteMode ? votePlayers : store.players}
              renderItem={({ item }) => (
                <Player key={item.order} player={item} />
              )}
            />
          </View>
        </TouchableWithoutFeedback>
        <Timer sec={store.isVoteMode ? 6 : 60} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 12
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around'
  }
});
