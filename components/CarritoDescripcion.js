import React from 'react';
import { Text, View } from 'react-native';
import { Stack, Surface } from '@react-native-material/core';


export const CarritoDescripcion = (props) => {
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
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '600',
              marginTop: 15,
            }}
          >
            Precio: ${props.precios}
          </Text>
          <Text>{props.cantidad}</Text>
        </Surface>
      </Stack>
    </View>
  );
};
