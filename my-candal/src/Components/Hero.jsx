const Hero = () => {
  return (
    <section className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to VIB CANDLE
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Discover handmade scented candles that bring warmth and elegance to your home.
        </p>

        <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;