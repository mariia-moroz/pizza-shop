import PizzaImg from "../../images/pizza-size.png";
import s from "./SizeCard.module.css";

const SizeCard = ({
  option,
  pizzaSize,
  setPizzaSize,
  setStandartPrice,
  setPizzaToppingsIncluded,
}) => {
  const { size, price, toppings_included } = option;

  const calculateSize = () => {
    switch (size) {
      case "Small":
        return 100;
      case "Medium":
        return 150;
      case "Large":
        return 200;
      default:
        return 100;
    }
  };

  const onSelectSize = () => {
    setPizzaSize(size);
    setStandartPrice(price);
    setPizzaToppingsIncluded(toppings_included);
  };

  return (
    <li id={size} className={s.item}>
      <img src={PizzaImg} alt={size} width={calculateSize()} />
      <p className={s.size}>{size}</p>
      <div className={s.info}>
        <p className={s.cost}>Pizza cost</p>
        <p className={s.price}>&#163;{price}</p>
        <p>{toppings_included} toppings included</p>
        <button
          type='button'
          className={`${s.button} ${pizzaSize === size && s.selected}`}
          onClick={onSelectSize}
        >
          {pizzaSize === size ? "Selected" : "Select"}
        </button>
      </div>
    </li>
  );
};

export default SizeCard;
