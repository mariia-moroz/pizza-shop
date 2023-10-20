import React from "react";
import s from "./CartCard.module.css";
import OrderModal from "../../components/OrderModal";

const CartCard = ({ info, id, deleteFromCart, toggleModal, isModalOpen }) => {
  const { size, price, ingredients } = info;

  return (
    <li className={s.item}>
      <span className={s.logo}> &#127829;</span>
      <div className={s.info}>
        <span className={s.title}>{size} pizza</span>
        <p>
          <span className={s.ingredients}>Ingredients:</span>{" "}
          {ingredients.join(", ")}
        </p>
      </div>
      <div className={s.priceContainer}>
        <span className={s.price}>&#163;{price}</span>
        <div className={s.buttons}>
          <button type='button' className={s.button} onClick={toggleModal}>
            Update
          </button>
          <button type='button' className={s.button} onClick={deleteFromCart}>
            Delete
          </button>
        </div>
      </div>
      <OrderModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        update={true}
        index={id}
      />
    </li>
  );
};

export default CartCard;
