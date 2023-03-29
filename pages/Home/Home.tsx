import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Button
          title="New game"
          onPress={() => navigation.navigate('Players')}
        />
        <Button title="List" onPress={() => console.info('s')} />
      </View>
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
  options: {
    flexDirection: 'row',
    gap: 16
  }
});
