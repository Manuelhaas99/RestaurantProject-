import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Stack, View } from '@react-native-material/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { foodTypes } from '../food';
import { FoodCard } from './FoodCard';

export const Home = ({ navigation }) => {
  console.log('In food card');
  return (
    <ScrollView
      style={{
        marginTop: 15,
      }}
    >
      {foodTypes.map((comida, index) => {
        return (
          <FoodCard
            key={index}
            platillo={comida.titulo}
            imagen={comida.imagen}
            onClick={() =>{
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
