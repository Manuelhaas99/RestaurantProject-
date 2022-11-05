import { Stack, Surface } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../Context';
import { CantidadItems } from './CantidadItems';

export const FoodWithDescription = (props) => {
  const { items, updateItems } = React.useContext(Context);
  const [cantidad, setCantidad] = React.useState(0);

  const updateCantidadLocal = () => {
    setCantidad(cantidad + 1);
    updateItems({
      id: props.id,
      cantidad: cantidad + 1,
      platillo: props.platillo,
      precio: props.precios,
    });
  };

  return (
    <View>
      <Stack>
        <Surface style={styles.surface}>
          <Text
            style={{ alignSelf: 'flex-start', fontSize: 30, fontWeight: '600' }}
          >
            {props.platillo}
          </Text>
          {props.descripcion && (
            <Text style={props.styles ? props.styles : styles.description}>
              {props.descripcion}
            </Text>
          )}
          <View style={styles.buttonsContainer}>
            <Text style={props.styles ? props.styles : styles.description}>
              Precio: ${props.precios}
            </Text>
            <CantidadItems
              cantidad={props.cantidad ? props.cantidad : cantidad}
              updateCantidadLocal={updateCantidadLocal}
            />
          </View>
          {props.total && <View style={[styles.total, styles.description]} >
            <Text style={{fontSize: 20}} >Total: {props.total}</Text>
          </View>}
        </Surface>
      </Stack>
    </View>
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
  }
});
