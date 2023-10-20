import { useState } from "react";
import s from "./Ingredient.module.css";

const Ingredient = ({ ingredient, ToggleCheckbox, pizzaIngredients }) => {
  const { name, image } = ingredient;

  const isChecked = pizzaIngredients.includes(name);
  return (
    <li className={`${s.ingredient} ${isChecked && s.selected}`} value={name}>
      <input
        type='checkbox'
        id={name}
        name={name}
        value={name}
        className={s.hidden}
        checked={isChecked}
        onChange={e => ToggleCheckbox(e)}
      />
      <label htmlFor={name}>
        <img src={image} alt={name} height={50} />
        <p className={s.name}>{name}</p>
      </label>
    </li>
  );
};

export default Ingredient;
