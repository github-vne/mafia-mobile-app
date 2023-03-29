import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TPlayer } from '../../../../types/Player';
import { updatePlayerFields } from '../../../../stores/players';

interface IPlayer {
  player: TPlayer;
}

export const Player = ({ player }: IPlayer) => {
  const dispatch = useDispatch();

  const handlePress = (name: string) => {
    dispatch(updatePlayerFields({ name, id: player.id }));
  };

  return (
    <View style={styles.container}>
      <Text>{player.order})</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handlePress(value)}
        value={player.name}
        placeholder="Enter name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
    marginBottom: 8
  },
  input: {
    width: '100%',
    marginLeft: 6,
    height: 35,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#000',
    padding: 8
  }
});
