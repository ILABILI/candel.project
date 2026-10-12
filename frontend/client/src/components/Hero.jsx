import { Link } from "react-router-dom";
import dessert from "../assets/dessert.JPG";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f5f1eb]">

      {/* Background Image */}
      <img
        src={dessert}
        alt="Luxury scented candle"
        className="absolute inset-0 h-full w-full object-cover"

        
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 text-center text-white">

        <div className="max-w-3xl">

          <p className="mb-5 text-sm uppercase tracking-[0.35em]">
            Handmade • Scented • Elegant
          </p>

          <h1 className="text-5xl font-light tracking-wide md:text-7xl">
            Light Your Space
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg">
            Handcrafted scented candles designed to bring warmth,
            beauty and a peaceful atmosphere into your home.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block bg-white px-8 py-4 text-sm font-medium uppercase tracking-widest text-gray-900 transition duration-300 hover:bg-gray-900 hover:text-white"
          >
            Shop Collection
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;