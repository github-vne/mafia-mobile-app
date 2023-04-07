import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { ERole, TPlayer } from '../../../../types/player';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStore } from '../../../../hooks';
import React, { useMemo } from 'react';
import { COLORS } from '../../../../constants/colors';
import { getRoleIcon } from '../../../../utils/role';

interface IPlayer {
  player: TPlayer;
}

export const Player = ({ player }: IPlayer) => {
  const { store, updatePlayer, addPlayerVote, removePlayerVote } = useStore();

  const handleBackFall = (e: any) => {
    e.stopPropagation();
    const newFall = player.fall - 1;

    updatePlayer(player.id, {
      fall: newFall,
      ...(newFall == 3 && { isDeleted: false })
    });
  };

  const isVote = useMemo(() => {
    return store.playersVote.includes(player.id);
  }, [store.playersVote, player.id]);

  const handleVote = (e: any) => {
    e.stopPropagation();
    if (player.isDeleted) return;
    if (isVote) {
      removePlayerVote(player.id);
    } else {
      addPlayerVote(player.id);
    }
  };

  const handleRemove = (e: any) => {
    e.stopPropagation();
    updatePlayer(player.id, { isDeleted: !player.isDeleted });
    removePlayerVote(player.id);
  };

  const handleFall = () => {
    const newFall = player.fall + 1;
    if (newFall > 4) return;
    updatePlayer(player.id, {
      fall: newFall,
      ...(newFall === 4 && { isDeleted: true })
    });
  };

  const handlePress = (id: string, voteCount: number) => {
    updatePlayer(id, { voteCount });
  };

  return (
    <View
      style={[
        styles.root,
        isVote && styles.isVote,
        player.isDeleted && styles.isDeleted
      ]}
    >
      <TouchableWithoutFeedback onPress={handleFall}>
        <View style={styles.data}>
          {store.isShowRoles && (
            <FontAwesome
              color="#fff"
              size={20}
              name={getRoleIcon(player.role)}
            />
          )}
          <Text style={[styles.dataText, isVote && { color: COLORS.green }]}>
            {player.order} |{' '}
            <Text style={[!player.isDeleted && styles.fall]}>
              {player.fall}
            </Text>
          </Text>
          <Text style={[styles.name, isVote && { color: COLORS.green }]}>
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

        {!store.isVoteMode && (
          <>
            <TouchableWithoutFeedback onPress={handleRemove}>
              <FontAwesome
                color={player.isDeleted ? COLORS.red : '#fff'}
                size={28}
                name="close"
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handleVote}>
              <FontAwesome
                color={isVote ? COLORS.green : '#fff'}
                size={28}
                name="check"
              />
            </TouchableWithoutFeedback>
          </>
        )}
        {store.isVoteMode && isVote && (
          <TextInput
            inputMode="numeric"
            style={styles.input}
            value={`${player.voteCount || ''}`}
            maxLength={1}
            onChangeText={(value) => handlePress(player.id, Number(value))}
          />
        )}
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
    borderColor: '#f2f2f2',
    minHeight: 54
  },
  dataText: {
    width: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#fff',
    width: 50,
    alignItems: 'center',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 20
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
