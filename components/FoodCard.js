import { Surface } from '@react-native-material/core';
import { Image, Text } from 'react-native';


export const FoodCard = (props) => {
  return (
    <>
      <Surface
        elevation={2}
        category='large'
        style={{
          flex: 1,
          width: '95%',
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingTop: 5,
          paddingBottom: 25,
          paddingEnd: 25,
          paddingStart: 25,
          marginTop: 10,
        }}
      >
        <Text style={{ alignSelf: 'flex-start', fontSize: 25 }}>
          {props.platillo}
        </Text>
        <Image source={props.imagen} />
      </Surface>
    </>
  );
};
