import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/products";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";


function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
      <Contact />
      <About />
      <Shop />

      
    </div>
  );
}










function Cart() {
  return <div>Cart</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;