import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-amber-600">
          Candle Shop
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-amber-600">
            Home
          </Link>

          <Link to="/shop" className="hover:text-amber-600">
            Shop
          </Link>

          <Link to="/about" className="hover:text-amber-600">
            About
          </Link>

          <Link to="/contact" className="hover:text-amber-600">
            Contact
          </Link>

          <Link to="/cart" className="hover:text-amber-600">
            Cart
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;