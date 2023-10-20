import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Confirmation from "./pages/Confirmation";
import { CartProvider } from "./context/CartContext";

Modal.setAppElement("body");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CartProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route
              index
              element={
                <Home toggleModal={toggleModal} isModalOpen={isModalOpen} />
              }
            />
            <Route path='about' element={<About />} />
            <Route
              path='cart'
              element={
                <Cart
                  toggleModal={toggleModal}
                  isModalOpen={isModalOpen}
                  confirmation={confirmation}
                  setConfirmation={setConfirmation}
                />
              }
            />
            <Route
              path='confirmation'
              element={<Confirmation confirmation={confirmation} />}
            />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
