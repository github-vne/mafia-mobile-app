import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { LogoImage, MafiaImage } from '../../assets/images';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../constants/colors';
import { Button } from '../../components/Button';

export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.main}>
        <Animatable.Image
          animation="fadeInLeft"
          easing="ease-in-out"
          style={styles.image}
          source={LogoImage}
        />

        <View>
          <View style={styles.textBlock}>
            <Text style={styles.text}>Welcome to</Text>
            <Text style={[styles.text, styles.name]}>Mafia</Text>
          </View>

          <Button
            text="Начать игру"
            onPress={() => navigation.navigate('Players')}
          />
        </View>
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
    justifyContent: 'space-between',
    gap: 6
  },
  textBlock: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 35
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0AFF96'
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: 400,
    resizeMode: 'contain'
  }
});
