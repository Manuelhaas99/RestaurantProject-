import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './components/HomeScreen';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

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
            headerRight: () => <Icon name='cart' size={30} color='black' style={{paddingRight: 15}} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
