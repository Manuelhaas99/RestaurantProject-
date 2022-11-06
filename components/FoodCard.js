import { Surface } from '@react-native-material/core';
import { Image, Pressable, Text, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const FoodCard = (props) => {
  return (
      <Surface
        elevation={2}
        category='large'
        style={{
          flex: 1,
          flexDirection: 'column',
          width: '95%',
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingTop: 5,
          paddingBottom: 25,
          paddingEnd: 25,
          paddingStart: 25,
          marginTop: 5,
          marginBottom: 10
        }}
      >
        <Text style={{ alignSelf: 'flex-start', fontSize: 25, marginTop: 25 }}>
          {props.platillo}
        </Text>
        <View style={{ width: '50%', height: '50%', marginTop: 15 }}>
          <Image
            style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'cover' }}
            source={props.imagen}
          />
        </View>
        <Pressable
          onPress={() => props.onClick(props.id)}
          style={[styles.centeredView, styles.button]}
        >
          <Text>Ver</Text>
        </Pressable>
      </Surface>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    width: 100,
  },
  button: {
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#F00',
    marginBottom: 25
  },
});
