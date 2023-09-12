import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { LogoImage } from '../../assets/images';
import { COLORS } from '../../constants/colors';
import { Button } from '../../components/Button';

export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Animatable.Image
            animation="fadeInLeft"
            easing="ease-in-out"
            style={styles.image}
            source={LogoImage}
          />

          <View>
            <Text style={styles.title}>Добро пожаловать!!!</Text>
            <Text style={styles.subText}>
              В мобильное приложение для игры в{' '}
              <Text style={styles.mark}>спортивную мафию</Text>
            </Text>
          </View>
        </View>

        <Button
          text="Начать игру"
          onPress={() => navigation.navigate('Players')}
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
  main: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
    gap: 6
  },
  content: {
    flex: 1,
    gap: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mark: {
    color: '#92977B'
  },
  title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 12
  },
  subText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
});
