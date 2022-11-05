import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import foods from '../food';
import { FoodWithDescription } from './FoodWithDescription';

export const FoodListScreen = (props) => {
  const idToRetrieve = props.route.params.id;
  const foodsToDisplay = foods[idToRetrieve];


  const renderFoodWithDescription = () => {
    return foodsToDisplay.map((item, index) => {
      return (
        <View key={index}>
          <FoodWithDescription
            id={item.id}
            platillo={item.platillo}
            descripcion={item.descripcion}
            precios={item.precio}
          />
        </View>
      );
    });
  };

  return <ScrollView>{renderFoodWithDescription()}</ScrollView>;
};
