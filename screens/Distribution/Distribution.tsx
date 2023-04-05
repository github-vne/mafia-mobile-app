import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { ERole, TPlayer } from '../../types/player';
import { AVAILABLE_ROLES } from '../../constants/role';
import { useStore } from '../../hooks';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/colors';
import { Button } from '../../components/Button';

export const Distribution = ({ navigation }: { navigation: any }) => {
  const { store, updatePlayer } = useStore();

  const [selectType, setSelectType] = useState('self');
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
    <SafeAreaView style={styles.root}>
      <Header title="Распределение ролей" />

      <FontAwesome size={160} name={currentRole ? getRoleIcon : 'question'} />
      <Text style={styles.role}>{currentRole || '---'}</Text>
      {!!availableRoles.length ? (
        <View style={styles.options}>
          {!!currentRole ? (
            <Button onPress={nextPlayer} text={`Next player`} />
          ) : (
            <Button
              onPress={getRandomRole}
              text={`Get random role ${store.players[playerIndex].name}`}
            />
          )}
        </View>
      ) : (
        <Button onPress={() => navigation.navigate('Game')} text="Game!" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  choose: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  types: {
    flexDirection: 'row',
    gap: 16,
    padding: 16
  },
  type: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  isActiveType: {
    backgroundColor: '#0AFF96'
  },
  typeText: {
    color: '#fff',
    fontSize: 24
  },
  role: {
    fontSize: 64
  },
  options: {
    flexDirection: 'row',
    gap: 16
  }
});
