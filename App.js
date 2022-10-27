import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { Carrito } from './components/Carrito';
import { CarritoIcono } from './components/CarritoIcono';
import { FoodListScreen } from './components/FoodListScreen';
import { Home } from './components/HomeScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={({route, navigation}) => ({
            title: 'Restaurante',
            headerRight: () => CarritoIcono(navigation),
          })}
        />
        <Stack.Screen name='FoodList' component={FoodListScreen} />
        <Stack.Screen name='Cart' component={Carrito} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
