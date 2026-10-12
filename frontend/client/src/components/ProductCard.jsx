function ProductCard({ product }) {
  return (
    <div className="group">

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f1eb]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Add to Cart */}
        <button className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 bg-white py-3 text-sm font-medium uppercase tracking-wider opacity-0 transition duration-300 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <div className="mt-1 flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-900">
            {product.name}
          </h3>

          <span className="text-sm text-gray-700">
            {product.price} MAD
          </span>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;