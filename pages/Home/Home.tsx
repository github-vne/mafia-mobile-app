import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { MafiaImage } from '../../assets/images';
import * as Animatable from 'react-native-animatable';

export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.main}>
        <Text style={styles.logo}>M</Text>
        <Text style={styles.title}>MAFIA</Text>
      </View>
      <Text style={[styles.container, styles.subTitle]}>
        Have a good game with
      </Text>
      <Text style={[styles.container, styles.applicationText]}>
        This Application
      </Text>
      <Text style={[styles.container, styles.description]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
        blanditiis ducimus nemo perspiciatis vitae, voluptatem? Animi deleniti
        dicta, distinctio dolor ducimus error ex in, iste nam non, praesentium
        quod?
      </Text>
      <View style={styles.circleBg} />
      <View style={[styles.circleBg, styles.circleBg2]} />

      <View style={styles.imageBox}>
        <Animatable.Image
          animation="fadeInLeft"
          easing="ease-in-out"
          style={styles.image}
          source={MafiaImage}
        />
        <TouchableOpacity
          style={styles.navigateOption}
          onPress={() => navigation.navigate('Players')}
        >
          <Animatable.View
            style={styles.startButton}
            animation="pulse"
            iterationCount="infinite"
            easing="ease-in-out"
          >
            <Text style={styles.start}>GO</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden'
  },
  main: {
    padding: 16,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    fontSize: 24
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: 'black',
    paddingTop: 3,
    width: 36,
    height: 36,
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  subTitle: {
    color: '#323232'
  },
  applicationText: {
    color: '#00bcc9',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14
  },
  circleBg: {
    height: 400,
    width: 400,
    backgroundColor: '#00bcc9',
    position: 'absolute',
    borderRadius: 400 / 2,
    bottom: 120,
    right: -126
  },
  circleBg2: {
    backgroundColor: '#F04B69',
    bottom: -126,
    left: -126
  },
  imageBox: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    marginBottom: -40
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'contain'
  },
  navigateOption: {
    position: 'absolute',
    bottom: '30%',
    left: '50%',
    transform: [{ translateX: -30 }]
  },
  startButton: {
    height: 60,
    width: 60,
    backgroundColor: '#F04B69',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2
  },
  start: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26
  }
});
