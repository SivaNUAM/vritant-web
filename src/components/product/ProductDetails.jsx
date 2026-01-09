import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/helpers";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <p className="text-center py-20">
        Product not found
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-2xl object-cover"
      />

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        <p className="text-green-700 font-semibold text-xl mt-2">
          {formatPrice(product.price)}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">
            Benefits
          </h3>
          <ul className="list-disc ml-5 text-gray-600">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">
            Ingredients
          </h3>
          <p className="text-gray-600">
            {product.ingredients.join(", ")}
          </p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-8 bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
