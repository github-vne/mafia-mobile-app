import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ERole, TPlayer } from '../../../../types/player';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStore } from '../../../../hooks';
import { useMemo } from 'react';

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

  const getRoleIcon = useMemo(() => {
    switch (player.role) {
      case ERole.Don:
        return 'chain';
      case ERole.Sheriff:
        return 'star';
      case ERole.Mafia:
        return 'user-secret';
      default:
        return 'user';
    }
  }, [player.role]);

  return (
    <View
      style={[
        styles.root,
        player.isVote && styles.isVote,
        player.isDeleted && styles.isDeleted
      ]}
    >
      <TouchableWithoutFeedback onPress={handleFall}>
        <View style={styles.data}>
          {store.isShowRoles && <FontAwesome size={20} name={getRoleIcon} />}
          <Text style={styles.number}>
            {player.order} |{' '}
            <Text style={[!player.isDeleted && styles.fall]}>
              {player.fall}
            </Text>
          </Text>
          <Text>{player.name}</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.actions}>
        <TouchableWithoutFeedback onPress={handleRemove}>
          <FontAwesome size={28} name="close" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleVote}>
          <FontAwesome size={28} name="check" />
        </TouchableWithoutFeedback>
      </View>
    </View>
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
    borderColor: '#fff',
    borderRadius: 16
  },
  isVote: {
    backgroundColor: '#00bcc9'
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
