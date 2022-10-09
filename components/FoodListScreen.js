import foods from '../food';
import { FoodWithDescription } from './FoodWithDescription';

export const FoodListScreen = (props) => {
  const idToRetrieve = props.route.params.id;
  const foodsToDisplay = foods[idToRetrieve];

  return foodsToDisplay.map((item) => {
    return (
      <FoodWithDescription
        platillo={item.platillo}
        descripcion={item.descripcion}
        precios={item.precio}
      />
    );
  });
};
