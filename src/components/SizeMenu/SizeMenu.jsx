import { useState } from "react";
// import options from "../../data/options.json";
import SizeCard from "../SizeCard";
import s from "./SizeMenu.module.css";

const SizeMenu = ({ options, ...props }) => {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <SizeCard key={option.size} option={option} {...props} />
      ))}
    </ul>
  );
};

export default SizeMenu;
