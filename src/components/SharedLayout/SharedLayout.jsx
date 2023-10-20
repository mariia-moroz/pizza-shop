import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
