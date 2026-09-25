import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          
          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-4">
              Candle Shop
            </h2>

            <p className="text-gray-400">
              Handmade scented candles made with love to bring warmth
              and elegance to your home.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>

              <Link to="/shop" className="text-gray-400 hover:text-white">
                Shop
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>

              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400">
              Email: BAILLYILHAM943@gmail.com
            </p>

            <p className="text-gray-400 mt-2">
              Phone: +212 603590648
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © 2026 Candle Shop. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;