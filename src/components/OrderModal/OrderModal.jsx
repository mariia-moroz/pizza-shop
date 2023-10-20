import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ReactModal from "react-modal";
import { BsXLg } from "react-icons/bs";
import IngredientsMenu from "../IngredientsMenu";
import { useCart } from "../../context/CartContext";
import SizeMenu from "../SizeMenu";
import options from "../../data/options.json";
import s from "./OrderModal.module.css";

const extraToppingValue = 1.49;

const OrderModal = ({
  isModalOpen,
  toggleModal,
  update = false,
  index = 0,
}) => {
  const [pizzaSize, setPizzaSize] = useState("");
  const [standartPrice, setStandartPrice] = useState(0);
  const [pizzaToppingsIncluded, setPizzaToppingsIncluded] = useState(0);
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [pizzaPrice, setPizzaPrice] = useState(0);

  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    let price = standartPrice;

    if (pizzaIngredients.length > pizzaToppingsIncluded) {
      price +=
        (pizzaIngredients.length - pizzaToppingsIncluded) * extraToppingValue;
    }

    setPizzaPrice(price);
  }, [
    pizzaIngredients.length,
    pizzaPrice,
    pizzaToppingsIncluded,
    standartPrice,
  ]);

  const ToggleCheckbox = e => {
    const value = e.target.value;
    setPizzaIngredients(prev =>
      pizzaIngredients.includes(value)
        ? prev.filter(cur => cur !== value)
        : [...prev, e.target.value]
    );
  };

  const onSubmitModal = () => {
    if (pizzaSize === 0 || pizzaIngredients.length === 0) {
      toast.error("Please select all options");
      return;
    }

    if (update) {
      const newCartItems = [...cartItems];
      newCartItems[index] = {
        size: pizzaSize,
        price: pizzaPrice,
        ingredients: pizzaIngredients,
      };
      setCartItems([...newCartItems]);
      toast.success("Item updated successfully");
    } else {
      setCartItems([
        ...cartItems,
        {
          size: pizzaSize,
          price: pizzaPrice,
          ingredients: pizzaIngredients,
        },
      ]);
      toast.success("Item added to cart successfully");
    }

    toggleModal();

    resetModal();
  };

  const resetModal = () => {
    setPizzaSize("");
    setStandartPrice(0);
    setPizzaToppingsIncluded(0);
    setPizzaIngredients([]);
    setPizzaPrice(0);
  };

  return (
    <ReactModal isOpen={isModalOpen}>
      <button type='button' onClick={toggleModal} className={s.closeButton}>
        <BsXLg size={30} />
      </button>
      <div className={s.product}>
        <h2 className={s.Header}>Let's create your pizza!</h2>
        <p className={s.subHeader}>First select the size:</p>
        <SizeMenu
          pizzaSize={pizzaSize}
          options={options}
          setPizzaSize={setPizzaSize}
          setStandartPrice={setStandartPrice}
          setPizzaToppingsIncluded={setPizzaToppingsIncluded}
        />
        <p className={s.subHeader}>Click to select toppings:</p>
        <p>Extra toppings: £1.49 per topping</p>
        <IngredientsMenu
          pizzaIngredients={pizzaIngredients}
          ToggleCheckbox={ToggleCheckbox}
        />
        <p className={s.subHeader}>Price for pizza: &#163;{pizzaPrice}</p>
        <button type='button' className={s.button} onClick={onSubmitModal}>
          {update ? "Update item" : "Add to cart"}
        </button>
      </div>
    </ReactModal>
  );
};

export default OrderModal;
