import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TPlayer } from '../../../../types/player';
import { useStore } from '../../../../hooks';

interface IPlayer {
  player: TPlayer;
}

export const Player = ({ player }: IPlayer) => {
  const { updatePlayer } = useStore();

  const handlePress = (name: string) => {
    updatePlayer(player.id, { name });
  };

  return (
    <View style={styles.container}>
      <Text>
        {player.order}) {player.role}
      </Text>
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
