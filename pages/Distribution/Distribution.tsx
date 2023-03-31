import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { ERole, TPlayer } from '../../types/player';
import { AVAILABLE_ROLES } from '../../constants/role';
import { useStore } from '../../hooks';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Distribution = ({ navigation }: { navigation: any }) => {
  const { store, updatePlayer } = useStore();

  const [playerIndex, setPlayerIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState<ERole | null>(null);
  const [availableRoles, setAvailableRoles] = useState(AVAILABLE_ROLES);

  const getRandomRole = () => {
    const roleIndex = Math.floor(Math.random() * availableRoles.length);
    const role = availableRoles[roleIndex];

    updatePlayer(store.players[playerIndex].id, { role });

    const newRoles = [...availableRoles];
    newRoles.splice(roleIndex, 1);

    setCurrentRole(role);
    setAvailableRoles(newRoles);
  };

  const nextPlayer = () => {
    setCurrentRole(null);
    setPlayerIndex((prev) => prev + 1);
  };

  const getRoleIcon = useMemo(() => {
    switch (currentRole) {
      case ERole.Don:
        return 'chain';
      case ERole.Sheriff:
        return 'star';
      case ERole.Mafia:
        return 'user-secret';
      default:
        return 'user';
    }
  }, [currentRole]);

  return (
    <View style={styles.container}>
      <FontAwesome size={160} name={currentRole ? getRoleIcon : 'question'} />
      <Text style={styles.role}>{currentRole || '---'}</Text>
      {!!availableRoles.length ? (
        <View style={styles.options}>
          {!!currentRole ? (
            <Button onPress={nextPlayer} title={`Next player`} />
          ) : (
            <Button
              onPress={getRandomRole}
              title={`Get random role ${store.players[playerIndex].name}`}
            />
          )}
        </View>
      ) : (
        <Button onPress={() => navigation.navigate('Game')} title="Game!" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  role: {
    fontSize: 64
  },
  options: {
    flexDirection: 'row',
    gap: 16
  }
});
