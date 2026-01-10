import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  Star,
  ShieldCheck,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";
import useCart from "../../hooks/useCart";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();

  const demoImages = [
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1564277287253-934c868e54ea?auto=format&fit=crop&q=80&w=800",
  ];

  const [imgSrc, setImgSrc] = useState(
    product?.image || demoImages[product?.id % 6 || 0]
  );

  const handleImageError = () => {
    setImgSrc(demoImages[product?.id % 6 || 0]);
  };

  const cartItem = cartItems?.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full bg-white
        rounded-[1.5rem] lg:rounded-[2.5rem]
        p-2 lg:p-3
        border border-gray-100 hover:border-green-100
        transition-all duration-500
        hover:shadow-[0_20px_40px_-10px_rgba(26,46,26,0.1)]"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] lg:rounded-[2rem] bg-[#F7F8F6] mb-3 lg:mb-5">
        <Link to={`/product/${product?.id}`} className="block h-full w-full">
          <motion.img
            src={imgSrc}
            alt={product?.name}
            onError={handleImageError}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
        </Link>

        <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
          <div className="flex flex-col gap-1">
            {product?.isNew && (
              <span className="bg-[#1A2E1A] text-white text-[7px] lg:text-[9px]
                font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-lg">
                New
              </span>
            )}
            <div className="hidden sm:flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full">
              <ShieldCheck size={10} className="text-green-600" />
              <span className="text-[7px] font-black uppercase text-gray-600">
                Pure
              </span>
            </div>
          </div>

          <button className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-md
            rounded-full flex items-center justify-center text-gray-400
            hover:text-red-500 transition-all active:scale-75 shadow-sm">
            <Heart className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="px-1 lg:px-3 flex-grow">
        <div className="flex items-center gap-1 mb-1">
          <Star size={8} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[8px] lg:text-[10px] font-bold text-gray-400 uppercase">
            4.9 • Organic
          </span>
        </div>

        <Link to={`/product/${product?.id}`}>
          <h3 className="font-serif text-[15px] lg:text-xl text-[#1A2E1A]
            leading-tight mb-1 group-hover:text-green-800 transition-colors line-clamp-1">
            {product?.name}
          </h3>
        </Link>
      </div>

      {/* FOOTER */}
      <div className="mt-auto px-1 lg:px-3 pt-3 lg:pt-4 border-t border-gray-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[7px] lg:text-[9px] uppercase tracking-widest text-gray-400 font-black">
              Price
            </span>
            <span className="block text-sm lg:text-lg font-serif font-bold text-[#1A2E1A]">
              ${product?.price}
            </span>
          </div>

          <Link
            to={`/product/${product?.id}`}
            className="flex items-center gap-1 text-[9px] lg:text-[11px]
              font-bold uppercase tracking-wider text-green-700 hover:text-green-900"
          >
            See Details <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* ADD TO CART / QUANTITY */}
        <div className="relative h-10 lg:h-12 w-full overflow-hidden rounded-xl lg:rounded-2xl">
          <AnimatePresence mode="wait">
            {quantity === 0 ? (
              <motion.button
                key="add"
                onClick={() => addToCart(product)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full flex items-center justify-center gap-2
                  bg-[#1A2E1A] text-white
                  h-10 lg:h-12 px-2
                  rounded-xl lg:rounded-2xl
                  shadow-md overflow-hidden transition-all duration-300"
              >
                <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest z-10">
                  Add to Bag
                </span>

                <ShoppingBag className="w-3.5 h-3.5 z-10
                  transition-transform duration-300 group-hover:rotate-12" />

                <div className="absolute inset-0 bg-green-900 translate-y-full
                  group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            ) : (
              <motion.div
                key="qty"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                exit={{ y: -40 }}
                className="absolute inset-0 flex items-center justify-between
                  bg-green-50 px-2 lg:px-3"
              >
                <button
                  onClick={() =>
                    quantity === 1
                      ? removeFromCart(product.id)
                      : updateQuantity(product.id, quantity - 1)
                  }
                  className="w-10 h-full flex items-center justify-center
                    text-green-900 hover:bg-white rounded-xl transition-all"
                >
                  <Minus size={16} />
                </button>

                <span className="font-black text-[#1A2E1A] text-base tabular-nums">
                  {quantity}
                </span>

                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="w-10 h-full flex items-center justify-center
                    text-green-900 hover:bg-white rounded-xl transition-all"
                >
                  <Plus size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
