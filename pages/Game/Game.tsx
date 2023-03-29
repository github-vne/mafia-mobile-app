import { StyleSheet, Text, View } from 'react-native';

export const Game = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>WELCOME!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  }
});
