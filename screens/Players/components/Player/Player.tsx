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
    backgroundColor: '#3B3F58',
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 16
  },
  isFocus: {
    borderColor: '#fff'
  },
  order: {
    color: '#fff',
    fontSize: 24,
    width: 35
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    color: '#fff'
  }
});
