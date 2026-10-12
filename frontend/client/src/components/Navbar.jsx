import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-gray-900"
        >
          LUMIÈRE
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link to="/shop" className="hover:text-black transition">
            Shop
          </Link>

          <Link to="/about" className="hover:text-black transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-sm font-medium text-gray-800 hover:text-black"
        >
          Cart
          <span className="ml-1 text-xs">(0)</span>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;