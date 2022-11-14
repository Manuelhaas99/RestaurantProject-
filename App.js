import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import { Carrito } from './components/Carrito';
import { CarritoIcono } from './components/CarritoIcono';
import { FoodListScreen } from './components/FoodListScreen';
import { Home } from './components/HomeScreen';
import { OrdersScreens } from './components/OrdersScreens';
import { Context, initalContext } from './Context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = React.useState(initalContext.items);
  const [ordenes, setOrdenes] = React.useState(initalContext.ordenes);

  const updateItems = (item, index) => {
    setItems(item);
  };

  const updateOrdenes = (item) => {
    setOrdenes(item);
  };

  return (
    <Context.Provider value={{ items, ordenes, updateItems, updateOrdenes }}>
      <NavigationContainer>
        <Stack.Navigator initialRoute='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={({ route, navigation }) => ({
              title: 'Restaurante',
              headerRight: () => CarritoIcono(navigation),
              headerLeft: () => (
                <Icon
                  name='abacus'
                  size={30}
                  color='black'
                  onPress={() => {
                    navigation.navigate('Orders', { modalVisible: true });
                  }}
                />
            ),
            })}
          />
          <Stack.Screen name='FoodList' component={FoodListScreen} />
          <Stack.Screen name='Cart' component={Carrito} />
          <Stack.Screen name='Orders' component={OrdersScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
