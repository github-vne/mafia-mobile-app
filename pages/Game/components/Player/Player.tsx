import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TPlayer } from '../../../../types/player';
import { updatePlayerFields } from '../../../../stores/players';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
      <Text>{player.order}) </Text>
      <FontAwesome size={22} name="user" />
      <Text>{player.name}</Text>
      <View style={styles.actions}>
        <FontAwesome size={28} name="close" />
        <FontAwesome size={28} name="check" />
        <Text style={styles.fall}>0</Text>
      </View>
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
    padding: 16,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 8
  },
  actions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 16
  },
  fall: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});
