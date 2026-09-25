
import { useState } from "react";

import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  setCart([...cart, product]);
};
  return (
    <>
      
      <Navbar/>

      


      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


      <Footer/>


      
    </>
  );
}

export default App;



