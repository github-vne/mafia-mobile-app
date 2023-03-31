import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TPlayer } from '../../../../types/player';
import { useStore } from '../../../../hooks';
import { useState } from 'react';

interface IPlayer {
  player: TPlayer;
}

export const Player = ({ player }: IPlayer) => {
  const [isFocus, setIsFocus] = useState(false);

  const { updatePlayer } = useStore();

  const handlePress = (name: string) => {
    updatePlayer(player.id, { name });
  };

  const toggleFocus = () => setIsFocus((prev) => !prev);

  return (
    <View style={[styles.container, isFocus && styles.isFocus]}>
      <Text style={styles.order}>{player.order}.</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handlePress(value)}
        value={player.name}
        placeholder="Enter name"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderWidth: 2,
    borderRadius: 16
  },
  isFocus: {
    borderColor: '#00bcc9'
  },
  order: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 35
  },
  input: {
    fontSize: 20,
    width: '100%'
  }
});