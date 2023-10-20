import { useState } from "react";
import OrderModal from "../../components/OrderModal";
import { PizzaItemProvider } from "../../context/PizzaItemContext";
import PizzaImg from "../../images/pizza.jpeg";
import s from "./Home.module.css";

const Home = ({ toggleModal, isModalOpen }) => {
  return (
    <PizzaItemProvider>
      <div>
        <img src={PizzaImg} alt='pizza' className={s.banner} />
        <h1 className={s.header}>Welcome to Pluto’s Pizza Shop!</h1>
        <p className={s.subHeader}>
          Are you ready for an unforgettable experience?
        </p>
        <button type='button' onClick={toggleModal} className={s.button}>
          Create Pizza
        </button>
        <OrderModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </div>
    </PizzaItemProvider>
  );
};

export default Home;
