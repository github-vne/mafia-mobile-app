import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useState } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/colors';
import { Button } from '../../components/Button';

export const DistributionType = ({ navigation }: { navigation: any }) => {
  const [selectType, setSelectType] = useState('self');

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Выберите распределение" />

      <View style={styles.choose}>
        <View style={styles.types}>
          <TouchableOpacity
            style={[styles.type, selectType === 'self' && styles.isActiveType]}
            onPress={() => setSelectType('self')}
          >
            <FontAwesome size={60} name="star" />
            <Text>Самостоятельный</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectType('random')}
            style={[
              styles.type,
              selectType === 'random' && styles.isActiveType
            ]}
          >
            <FontAwesome size={60} name="question" />
            <Text>Случайный</Text>
          </TouchableOpacity>
        </View>
        <Button
          text="Выбрать"
          onPress={() =>
            navigation.navigate('Distribution', { type: selectType })
          }
        />
      </View>
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
