import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Context } from '../Context';

export const CarritoIcono = (navigation) => {
  const { items, updateItems } = React.useContext(Context);
  return (
    <View>
      <Icon
        name='cart'
        size={30}
        color='black'
        style={styles.carrito}
        onPress={() => {
          navigation.navigate('Cart', { modalVisible: true });
        }}
      />
      <View style={styles.notiContainer}>
        <Text style={styles.noti}>{items.length}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  }, 
  carrito: { paddingRight: 15 },
  noti: {
    backgroundColor: 'red',
    width: 10,
    color: 'white',
    fontSize: 12,
    borderRadius: 500,
    
  },
  notiContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 20,
    marginBottom: 15
  }
})