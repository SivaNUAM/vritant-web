import { motion } from "framer-motion";
import { Lock, CreditCard, ChevronRight, Gift, Info,Sparkles } from "lucide-react";
import useCart from "../../hooks/useCart";
import { calculateCartTotal, formatPrice } from "../../utils/helpers";

const CartSummary = () => {
  const { cartItems } = useCart();
  const subtotal = calculateCartTotal(cartItems);
  const deliveryFee = 0; // Or calculate based on subtotal
  const tax = subtotal * 0.08; // Example 8% tax
  const grandTotal = subtotal + deliveryFee + tax;

  return (
    <div className="relative">
      {/* Decorative Blur Background Element */}
      <div className="absolute -inset-4 bg-gradient-to-br from-green-50 to-transparent opacity-50 blur-3xl -z-10" />

      <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(26,46,26,0.05)]">
        <h2 className="text-2xl font-serif text-[#1A2E1A] mb-8 flex items-center gap-2">
          Order Summary
          <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
            Secure
          </span>
        </h2>

        {/* Pricing Breakdown */}
        <div className="space-y-4">
          <div className="flex justify-between items-center group">
            <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">Subtotal</span>
            <span className="text-sm font-bold text-[#1A2E1A]">{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between items-center group">
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">Tax (EST)</span>
              <Info size={12} className="text-gray-300 cursor-help hover:text-green-700 transition-colors" />
            </div>
            <span className="text-sm font-bold text-[#1A2E1A]">{formatPrice(tax)}</span>
          </div>

          <div className="flex justify-between items-center group">
            <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">Standard Delivery</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Complimentary</span>
          </div>

          {/* Promo Code Input */}
          <div className="pt-4 group">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-green-800 transition-colors">
              <Gift size={14} />
              Apply Promo Code
            </button>
            <div className="mt-3 flex gap-2">
              <input 
                type="text" 
                placeholder="RITUAL10" 
                className="flex-grow bg-[#FDFCF8] border border-gray-100 rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-green-800/10 outline-none uppercase placeholder:text-gray-200"
              />
              <button className="bg-gray-100 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

        {/* Grand Total */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Total Investment</span>
            <p className="text-4xl font-serif text-green-950">{formatPrice(grandTotal)}</p>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-800"
          >
            <Sparkles size={16} />
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
            <a href="/checkout">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#062206" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#1A2E1A] text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-green-900/20"
          >
            Go to Checkout
            <ChevronRight size={16} />
          </motion.button>
            </a>
          <div className="flex items-center justify-center gap-4 text-gray-300">
             <Lock size={12} />
             <span className="text-[9px] font-bold uppercase tracking-widest">SSL Encrypted Checkout</span>
          </div>
        </div>

        {/* Accepted Cards */}
        <div className="mt-8 flex justify-center gap-3 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="w-8 h-5 bg-gray-200 rounded-sm" />
          <div className="w-8 h-5 bg-gray-200 rounded-sm" />
          <div className="w-8 h-5 bg-gray-200 rounded-sm" />
          <CreditCard size={20} className="text-gray-400" />
        </div>
      </div>
      
      {/* Policy Note */}
      <p className="mt-6 px-4 text-center text-[9px] text-gray-400 leading-relaxed font-light">
        Shipping & taxes calculated at checkout. By proceeding, you agree to our 
        <span className="underline ml-1 cursor-pointer">Terms of Service</span>.
      </p>
    </div>
  );
};

export default CartSummary;