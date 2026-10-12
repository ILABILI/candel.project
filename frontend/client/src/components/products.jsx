import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="bg-white px-6 py-20 md:px-12">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          Our Collection
        </p>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-light tracking-wide md:text-5xl">
            Our Candles
          </h2>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Discover our handcrafted candles, created to make
            every space feel warmer and more beautiful.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;