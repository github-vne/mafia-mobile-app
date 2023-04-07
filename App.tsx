import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Home } from './screens/Home';
import { Players } from './screens/Players';
import { stores } from './stores/stores';
import { Distribution } from './screens/Distribution';
import { Game } from './screens/Game';
import { DistributionType } from './screens/DistributionType';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={stores}>
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DistributionType"
            component={DistributionType}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Distribution"
            component={Distribution}
            options={{ headerShown: false }}
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
