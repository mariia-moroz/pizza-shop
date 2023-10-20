import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import CartCard from "../../components/CartCard";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import s from "./Cart.module.css";

const key = "zUe8ngdjyXQh9_7tr";
const templateId = "template_a29uaqj";
const serviceId = "service_j0rtjdf";
const myName = "Mariia";
const myEmail = "mma.moroz.mariia@gmail.com";

const Cart = ({ confirmation, setConfirmation, ...props }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [textMessage, setTextMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async e => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8800/api/orders",
        data: {
          total_price: totalPrice,
          items: cartItems,
          message: textMessage,
        },
      });
      setConfirmation(response.data._id);
      emailjs.send(
        serviceId,
        templateId,
        {
          to_name: myName,
          to_email: myEmail,
          message: response.data._id,
        },
        key
      );
      navigate("/confirmation");
    } catch (error) {
      toast.error("Something went wrong :(");
    }
  };

  const deleteFromCart = id => {
    var items = [...cartItems];
    if (id !== -1) {
      items.splice(id, 1);
      setCartItems(items);
    }
  };

  return (
    <div className={s.container}>
      <h1 className={s.header}>Your Cart</h1>
      {cartItems?.length === 0 ? (
        <p className={s.cartMessage}>Your cart is empty now</p>
      ) : (
        <ul className={s.itemsList}>
          {cartItems?.map((item, index) => (
            <CartCard
              key={index}
              info={item}
              id={index}
              deleteFromCart={deleteFromCart}
              {...props}
            />
          ))}
        </ul>
      )}
      <p>Anything else you would like to share with us?</p>
      <textarea
        name='message'
        id='message'
        className={s.message}
        cols='100'
        rows='8'
        value={textMessage}
        onChange={e => setTextMessage(e.target.value)}
        placeholder='Allergies or special notes'
      />
      <p className={s.total}>Total: &#163;{totalPrice}</p>
      <button type='button' className={s.button} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Cart;

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

// const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
// const [totalPrice, setTotalPrice] = useLocalStorage("cartItems", 0);
