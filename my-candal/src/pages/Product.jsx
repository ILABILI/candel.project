

function Product() {
 

  return (
    
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-3xl shadow-lg"
        />

        <div>

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-amber-700 text-3xl font-bold mt-6">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-8 leading-8">
            {product.description}
          </p>

          <button
            className="mt-10 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default Product;