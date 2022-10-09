import { Stack, Surface } from '@react-native-material/core';
import { View, Text } from 'react-native';


export const FoodWithDescription = (props) => {
  return (
    <View>
      <Stack>
        <Surface>
          <Text>{props.platillo}</Text>
          <Text>{props.descripcion}</Text>
          <Text>{props.precios}</Text>
        </Surface>
      </Stack>
    </View>
  );
};
