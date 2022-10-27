import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import { Context } from '../Context';
import { FoodWithDescription } from './FoodWithDescription';
import { CarritoDescripcion } from './CarritoDescripcion';

export const Carrito = (props) => {
  
  const {items} = React.useContext(Context);
  console.log({items})


  return (
    <View style={styles.centeredView}>
      <Text>
        Este es tu carrito
      </Text>
      <Text>
        Tienes: { items.length > 0 && items.map((item, index) => {
          
          return (
            <View key={index}>
              <CarritoDescripcion
                platillo={item.platillo}
                precios={item.precio}
                cantidad={item.cantidad}
              />
            </View>
          );
        })}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
