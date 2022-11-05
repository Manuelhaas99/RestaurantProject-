import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import { Carrito } from './components/Carrito';
import { CarritoIcono } from './components/CarritoIcono';
import { FoodListScreen } from './components/FoodListScreen';
import { Home } from './components/HomeScreen';
import { Context, initalContext } from './Context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = React.useState(initalContext.items);

  const updateItems = (item) => {
    setItems([item, ...items]);
  };

  return (
    <Context.Provider value={{ items, updateItems }}>
      <NavigationContainer>
        <Stack.Navigator initialRoute='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={({ route, navigation }) => ({
              title: 'Restaurante',
              headerRight: () => CarritoIcono(navigation),
            })}
          />
          <Stack.Screen name='FoodList' component={FoodListScreen} />
          <Stack.Screen name='Cart' component={Carrito} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
