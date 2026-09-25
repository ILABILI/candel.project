

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = ({addToCart}) => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Candles
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;