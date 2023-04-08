import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { ERole, TPlayer } from '../../types/player';
import { AVAILABLE_ROLES, TITLE_ROLE } from '../../constants/role';
import { useStore } from '../../hooks';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/colors';
import { Button } from '../../components/Button';
import { getRoleIcon } from '../../utils/role';

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

  const roleIcon = useMemo(() => {
    if (!currentRole) return 'question';
    return getRoleIcon(currentRole);
  }, [currentRole]);

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Распределение ролей" />
      <View style={styles.container}>
        <View style={styles.content}>
          <FontAwesome color="#fff" size={220} name={roleIcon} />
          {currentRole && (
            <Text style={styles.role}>{TITLE_ROLE[currentRole]}</Text>
          )}
        </View>

        {!!availableRoles.length ? (
          <View style={styles.options}>
            {!!currentRole ? (
              <Button onPress={nextPlayer} text="Следующий игрок" />
            ) : (
              <Button
                onPress={getRandomRole}
                text={`${store.players[playerIndex].order}. ${store.players[playerIndex].name}`}
              />
            )}
          </View>
        ) : (
          <Button
            onPress={() => navigation.navigate('Game')}
            text="Начать игру!"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  container: {
    flex: 1,
    padding: 16
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  role: {
    fontSize: 68,
    color: '#fff',
    fontWeight: 'bold'
  },
  options: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16
  }
});
