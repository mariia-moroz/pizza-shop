import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.container}>
      <h1>About us</h1>
      <p>
        Pluto’s Pizza Shop is the most popular pizza joint in all of London.
        Pluto’s is famous for its made-to-order pizza, and now they’re looking
        to expand into the world of online delivery. Head Chef Floris wants to
        make sure people ordering online have the same customisation options as
        customers who come into the store.
      </p>
    </div>
  );
};

export default About;
