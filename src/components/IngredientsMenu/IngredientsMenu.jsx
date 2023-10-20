import ingredients from "../../data/ingredients.json";
import Ingredient from "../Ingredient/Ingredient";
import s from "./IngredientsMenu.module.css";

const IngredientsMenu = ({ ...props }) => {
  return (
    <>
      <ul className={s.menu}>
        {ingredients.map(ingredient => (
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            {...props}
          />
        ))}
      </ul>
    </>
  );
};

export default IngredientsMenu;
