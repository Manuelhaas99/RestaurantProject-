import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { foodTypes } from '../food';
import { FoodCard } from './FoodCard';

export const Home = ({ navigation }) => {
  console.log('In food card');
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {foodTypes.map((comida, index) => {
          return (
            <FoodCard
              key={index}
              platillo={comida.titulo}
              imagen={comida.imagen}
              onClick={() => {
                navigation.navigate('FoodList', { id: comida.id });
              }}
            />
          );
        })}
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
