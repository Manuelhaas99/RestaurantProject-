import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { FoodListScreen } from './components/FoodListScreen';
import { Home } from './components/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRoute='Home'>
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Restaurante',
            headerRight: () => (
              <Icon
                name='cart'
                size={30}
                color='black'
                style={{ paddingRight: 15 }}
              />
            ),
          }}
        />
        <Drawer.Screen name='FoodList' component={FoodListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
