import { View, Text, StyleSheet } from 'react-native';
import { foodTypes } from '../food';
import { FoodCard } from './FoodCard';
import { Stack } from '@react-native-material/core';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export const Home = ({ navigation }) => {
  console.log('In food card');
  return (
    <ScrollView
      style={{
        marginTop: 15,
      }}
    >
      <Stack spacing={2}  style={styles}>
        {foodTypes.map((comida, index) => {
          return (
            <FoodCard
              key={index}
              platillo={comida.titulo}
              imagen={comida.imagen}
            />
          );
        })}
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
