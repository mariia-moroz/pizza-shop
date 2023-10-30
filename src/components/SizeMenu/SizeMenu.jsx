import SizeCard from "../SizeCard";
import s from "./SizeMenu.module.css";

const SizeMenu = ({ options, ...props }) => {
  return (
    <ul className={s.list}>
      {options.map((option, index) => (
        <SizeCard key={option.size} option={option} index={index} {...props} />
      ))}
    </ul>
  );
};

export default SizeMenu;
