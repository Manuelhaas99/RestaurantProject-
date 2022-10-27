import React from 'react';
import { Stack, Surface } from '@react-native-material/core';
import { View, Text, Pressable } from 'react-native';
import { Context } from '../Context';

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
        <Surface
          style={{
            width: '95%',
            height: 'auto',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            paddingTop: 20,
            paddingBottom: 30,
            paddingEnd: 30,
            paddingStart: 15,
            marginTop: 10,
            borderRadius: 6,
            elevation: 8,
            shadowOpacity: 0.3,
            shadowRadius: 2,
            marginHorizontal: 8,
            marginVertical: 6,
          }}
        >
          <Text
            style={{ alignSelf: 'flex-start', fontSize: 30, fontWeight: '600' }}
          >
            {props.platillo}
          </Text>
          <Text
            style={{ alignSelf: 'flex-start', fontSize: 20, marginTop: 15 }}
          >
            {props.descripcion}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '600',
              marginTop: 15,
            }}
          >
            Precio: ${props.precios}
          </Text>
          <Pressable onPress={updateCantidadLocal}>
            <Text>Agregar</Text>
          </Pressable>
          <Text>{cantidad}</Text>
        </Surface>
      </Stack>
    </View>
  );
};
