

function Shop() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-6">
        Our Collection
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Discover our luxury scented candles and elegant home décor.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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

export default Shop;