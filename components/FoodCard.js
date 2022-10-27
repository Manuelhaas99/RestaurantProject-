import { Surface } from '@react-native-material/core';
import { Image, Pressable, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const FoodCard = (props) => {
  return (
    <TouchableHighlight onPress={() => props.onClick(props.id)}>
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
        <Pressable
          onPress={() => props.onClick(props.id)}
          style={[styles.centeredView, styles.button]}
        >
          <Text>Ver</Text>
        </Pressable>
      </Surface>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: 100
  },
  button: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F00",
  },
});
