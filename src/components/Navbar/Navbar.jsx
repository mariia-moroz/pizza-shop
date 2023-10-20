import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <span className={s.title}>
        <span className={s.logo}> &#127829;</span>
        <span className={s.name}>Pluto’s Pizza</span>
      </span>
      <div className={s.navContainer}>
        <NavLink to='/' className={s.navLink}>
          Home
        </NavLink>
        <NavLink to='about' className={s.navLink}>
          About
        </NavLink>
      </div>
      <NavLink to='cart' className={s.navLink}>
        Cart
      </NavLink>
    </nav>
  );
};

export default Navbar;
