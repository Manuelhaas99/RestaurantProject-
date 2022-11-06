import { StyleSheet, Text, View, Pressable } from 'react-native';

export const CantidadItems = ({ cantidad, updateCantidadLocal }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> updateCantidadLocal(true)}>
        <Text style={[styles.button, styles.font]}>-</Text>
      </Pressable>
      <Text style={[styles.button, styles.font]}>{cantidad}</Text>
      <Pressable onPress={() => updateCantidadLocal(false)}>
        <Text style={[styles.button, styles.font]}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
  font: {
    fontSize: 20
  }
});
