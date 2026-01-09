import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, Leaf } from "lucide-react";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  // Prevents quantity from going below 1
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white/50 backdrop-blur-md border border-gray-100 p-5 rounded-[2.5rem] hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500"
    >
      {/* Product Image with Hover Zoom */}
      <div className="relative overflow-hidden w-28 h-28 rounded-[2rem] bg-[#F4F2EE]">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.onSale && (
          <div className="absolute top-2 left-2 bg-green-900 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
            Organic
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 text-center sm:text-left space-y-1">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-green-800/40">
            {item.category}
          </span>
          <Leaf size={10} className="text-green-800/20" />
        </div>
        <h3 className="text-xl font-serif text-[#1A2E1A] group-hover:text-green-800 transition-colors">
          {item.name}
        </h3>
        <p className="text-sm font-bold text-green-900/80">
          {formatPrice(item.price)}
        </p>
      </div>

      {/* Tactile Quantity Controller */}
      <div className="flex items-center bg-[#FDFCF8] border border-gray-100 p-1.5 rounded-full shadow-inner">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={handleDecrement}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm text-gray-400 hover:text-green-900 transition-all"
        >
          <Minus size={14} />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.span
            key={item.quantity}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            className="w-10 text-center text-sm font-black text-[#1A2E1A]"
          >
            {item.quantity}
          </motion.span>
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm text-gray-400 hover:text-green-900 transition-all"
        >
          <Plus size={14} />
        </motion.button>
      </div>

      {/* Subtotal & Remove */}
      <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-4 sm:pl-4 sm:border-l border-gray-100 min-w-[100px]">
        <div className="text-right hidden sm:block">
          <p className="text-[8px] font-black uppercase tracking-widest text-gray-300">Total</p>
          <p className="text-sm font-bold text-[#1A2E1A]">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1, color: "#ef4444" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromCart(item.id)}
          className="p-3 text-gray-300 transition-colors rounded-full hover:bg-red-50"
          title="Remove Item"
        >
          <Trash2 size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;