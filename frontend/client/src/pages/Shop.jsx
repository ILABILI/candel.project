import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Shop() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Signature Collection",
    "Floral Collection",
    "Luxury Collection",
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#49382D]">

      {/* Page heading */}
      <section className="text-center px-5 pt-16 pb-10">
        <p className="text-xs tracking-[0.35em] uppercase text-[#A17B52]">
          Made with love
        </p>

        <h1 className="font-serif text-4xl md:text-6xl mt-4">
          Our Candle Collection
        </h1>

        <p className="mt-4 text-sm md:text-base text-[#806F60] max-w-xl mx-auto">
          Discover handmade candles designed to bring
          warmth, beauty and fragrance into your home.
        </p>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-8">
        <div className="flex gap-3 overflow-x-auto pb-3 justify-start md:justify-center">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`shrink-0 px-5 py-2.5 text-xs tracking-wide border transition
                ${
                  category === item
                    ? "bg-[#49382D] text-white border-[#49382D]"
                    : "border-[#DCCDBB] text-[#59483C] hover:border-[#A17B52]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-7 md:gap-y-12">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group">

              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F0E9DE]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-3 left-3 bg-[#FAF7F0] px-2 py-1 text-[9px] md:text-[10px] tracking-wider uppercase">
                    Handmade
                  </span>
                </div>

                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-[#A17B52]">
                    {product.category}
                  </p>

                  <h2 className="font-serif text-base md:text-xl mt-1">
                    {product.name}
                  </h2>

                  <p className="text-sm mt-2">
                    {product.price} MAD
                  </p>
                </div>
              </Link>

            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center py-16">
            No products found.
          </p>
        )}
      </section>
    </main>
  );
}