import Icon from '@expo/vector-icons/MaterialCommunityIcons';


export const CarritoIcono = (navigation) => {
return (
  <Icon
    name='cart'
    size={30}
    color='black'
    style={{ paddingRight: 15 }}
    onPress={() => {navigation.navigate('Cart', { modalVisible: true })}}
  />
)
}