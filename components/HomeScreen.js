import { View, Text, StyleSheet } from "react-native";

export const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Aqui abajo se va a renderizar LotsOfGreetings</Text>
        <LotsOfGreetings />
      </View>
    </>
  );
};

// Creamos el componente Greeting, el cual recibe de prop solo name
const Greeting = ({ name }) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {name}!</Text>
    </View>
  );
}
// Este es el componente padre de greeting, para poder renderizarlo debes llamarlo en el componente HomeScreen
// en este caso el export no es necesario porque esta dentro del mismo archivo, pero lo puedes dejar
export default LotsOfGreetings = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
