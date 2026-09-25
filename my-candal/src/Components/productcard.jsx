const ProductCard = ({ product,addToCart }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-amber-600 font-bold text-lg mt-4">
          ${product.price}
        </p>

        <button
         onClick={() => addToCart(product)}
          className="w-full mt-4 bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
           >
              Add to Cart
            </button>
      </div>
    </div>
  );
};

export default ProductCard;