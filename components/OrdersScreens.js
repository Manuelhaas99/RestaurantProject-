import { Button } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../Context';
import { FoodWithDescription } from './FoodWithDescription';
import { Stack, Surface } from '@react-native-material/core';

export const OrdersScreens = () => {
  const { items, ordenes, updateItems, updateOrdenes } =
    React.useContext(Context);
  console.log({ ordenes });
  return (
    <>
      <ScrollView>
        {ordenes.length > 0 &&
          ordenes.map((item, index) => {
            console.log({ data: item });
            return (
              <View key={index}>
                <Text>Current date: {item.date}</Text>
                <Stack>
                  <Surface style={styles.surface}>
                    <Text>Platillos: </Text>

                    <Text>{item.data[0].platillo}</Text>
                    <Text>Total del pedido: {item.total}</Text>
                    <Button
                      style={styles.centerButton}
                      title='Ver Pedido'
                      onPress={() => updateValues()}
                    />
                  </Surface>
                </Stack>
              </View>
            );
          })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  surface: {
    width: '95%',
    height: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 15,
    paddingEnd: 30,
    paddingStart: 15,
    marginTop: 10,
    borderRadius: 6,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 8,
    marginVertical: 6,
  },
  description: {
    alignSelf: 'flex-end',
    fontSize: 20,
    marginTop: 15,
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerButton: {
    width: 100,
  },
  total: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
