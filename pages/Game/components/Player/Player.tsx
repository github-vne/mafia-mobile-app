import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { TPlayer } from '../../../../types/player';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStore } from '../../../../hooks';

interface IPlayer {
  player: TPlayer;
}

export const Player = ({ player }: IPlayer) => {
  const { store, updatePlayer } = useStore();

  const handleVote = (e: any) => {
    e.stopPropagation();
    updatePlayer(player.id, { isVote: !player.isVote });
  };

  const handleRemove = (e: any) => {
    e.stopPropagation();
    updatePlayer(player.id, { isDeleted: !player.isDeleted });
  };

  const handleFall = () => {
    updatePlayer(player.id, { fall: player.fall + 1 });
  };

  return (
    <TouchableWithoutFeedback onPress={handleFall}>
      <View
        style={[
          styles.root,
          player.isVote && styles.isVote,
          player.isDeleted && styles.isDeleted
        ]}
      >
        <View style={styles.data}>
          {store.isShowRoles && <FontAwesome size={20} name="user" />}
          <Text style={styles.number}>
            {player.order}(<Text style={styles.fall}>{player.fall}</Text>)
          </Text>
          <Text>{player.name}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={handleRemove}>
            <FontAwesome size={28} name="close" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleVote}>
            <FontAwesome size={28} name="check" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#fff'
  },
  isVote: {
    backgroundColor: 'green'
  },
  isDeleted: {
    backgroundColor: '#444'
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  actions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 16
  },
  fall: {
    color: 'red'
  }
});
