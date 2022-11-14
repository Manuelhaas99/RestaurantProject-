import { Button } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../Context';
import { FoodWithDescription } from './FoodWithDescription';

export const Carrito = (props) => {
  const { items, ordenes, updateItems, updateOrdenes } = React.useContext(Context);

  let total = 0;
  const updateValues = () => {
    const newOrders = [...ordenes]
    const newItem = {
      id: Math.random() * 10000,
      date: Date.now(),
      data: [...items],
      total
    }
    newOrders.push(newItem)
    updateOrdenes(newOrders)
    updateItems([])
  }

  return (
    <>
      <ScrollView>
        {items.length > 0 &&
          items.map((item, index) => {
            total += item.precio * item.cantidad;
            const totalToDisplay = item.precio * item.cantidad;
            return (
              <View key={index} style={styles.itemView}>
                <FoodWithDescription
                  platillo={item.platillo}
                  precios={item.precio}
                  cantidad={item.cantidad}
                  total={totalToDisplay}
                  styles={styles.description}
                />
              </View>
            );
          })}
      </ScrollView>
      {items.length > 0 && (
        <Button
          style={styles.centerButton}
          title={`Total a pagar $${total}`}
          onPress={() => updateValues()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flexDirection: 'row',
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 20,
  },
  itemView: {
    marginBottom: 10,
    marginTop: 5,
  },
  centerButton: {
    marginBottom: 7,
    marginLeft: 4,
    marginRight: 4,
  },
});
