import {
  FlatList,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  SafeAreaView
} from 'react-native';
import { Player } from './components/Player';
import { useStore } from '../../hooks';
import { COLORS } from '../../constants/colors';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export const Players = ({ navigation }: { navigation: any }) => {
  const { store } = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Список игроков" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <FlatList
              data={store.players}
              renderItem={({ item }) => (
                <Player key={item.order} player={item} />
              )}
            />
            <View style={styles.btnContainer}>
              <Button
                text="Start game"
                onPress={() => navigation.navigate('DistributionType')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: COLORS.bg
  },
  inner: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-around'
  },
  btnContainer: {
    marginTop: 16
  }
});
