import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ERole, TPlayer } from '../../../../types/player';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStore } from '../../../../hooks';
import React, { useMemo } from 'react';
import { COLORS } from '../../../../constants/colors';

interface IPlayer {
  player: TPlayer;
}

export const Player = ({ player }: IPlayer) => {
  const { store, updatePlayer } = useStore();

  const handleBackFall = (e: any) => {
    e.stopPropagation();
    const newFall = player.fall - 1;

    updatePlayer(player.id, {
      fall: newFall,
      ...(newFall == 3 && { isDeleted: false })
    });
  };

  const handleVote = (e: any) => {
    e.stopPropagation();
    if (player.isDeleted) return;
    updatePlayer(player.id, { isVote: !player.isVote });
  };

  const handleRemove = (e: any) => {
    e.stopPropagation();
    updatePlayer(player.id, { isDeleted: !player.isDeleted, isVote: false });
  };

  const handleFall = () => {
    const newFall = player.fall + 1;
    if (newFall > 4) return;
    updatePlayer(player.id, {
      fall: newFall,
      ...(newFall === 4 && { isDeleted: true })
    });
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
          {store.isShowRoles && (
            <FontAwesome color="#fff" size={20} name={getRoleIcon} />
          )}
          <Text
            style={[styles.dataText, player.isVote && { color: COLORS.green }]}
          >
            {player.order} |{' '}
            <Text style={[!player.isDeleted && styles.fall]}>
              {player.fall}
            </Text>
          </Text>
          <Text style={[styles.name, player.isVote && { color: COLORS.green }]}>
            {player.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.actions}>
        {!!player.fall && (
          <TouchableWithoutFeedback onPress={handleBackFall}>
            <FontAwesome size={24} name="arrow-circle-left" color="#fff" />
          </TouchableWithoutFeedback>
        )}
        <TouchableWithoutFeedback onPress={handleRemove}>
          <FontAwesome
            color={player.isDeleted ? COLORS.red : '#fff'}
            size={28}
            name="close"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleVote}>
          <FontAwesome
            color={player.isVote ? COLORS.green : '#fff'}
            size={28}
            name="check"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    marginBottom: 8,
    borderBottomWidth: 2,
    borderColor: '#f2f2f2'
  },
  dataText: {
    width: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  isVote: {
    borderColor: COLORS.green
  },
  name: {
    fontSize: 18,
    color: '#fff'
  },
  isDeleted: {
    backgroundColor: '#444'
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
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
