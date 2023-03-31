import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Home } from './pages/Home';
import { Players } from './pages/Players';
import { appStores } from './stores/stores';
import { Distribution } from './pages/Distribution';
import { Game } from './pages/Game';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={appStores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Players"
            component={Players}
            options={{ title: 'Players' }}
          />
          <Stack.Screen
            name="Distribution"
            component={Distribution}
            options={{ title: 'Distribution' }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
