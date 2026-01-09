import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowLeft, Truck, ShieldCheck, Sparkles } from "lucide-react";
import useCart from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { Link } from "react-router-dom"; // Assuming you use react-router

const Cart = () => {
  const { cartItems } = useCart();
  
  // Calculate Progress for Free Shipping (Example: $150 threshold)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingThreshold = 150;
  const progress = Math.min((subtotal / shippingThreshold) * 100, 100);

  return (
    <div className="bg-[#FDFCF8] min-h-screen pb-24">
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="pt-24 pb-12 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/shop" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-green-900 transition-colors">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </Link>
        <div className="flex items-center gap-3">
          <ShoppingBag size={20} className="text-green-900" />
          <span className="text-sm font-serif italic text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? 'Treasure' : 'Treasures'} Saved
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* --- LEFT: ITEMS LIST --- */}
        <div className="lg:col-span-8">
          <header className="mb-10">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-serif text-[#1A2E1A] mb-4"
            >
              Your <span className="italic font-light text-green-900/40">Selection</span>
            </motion.h1>

            {/* Free Shipping Progress Bar */}
            {cartItems.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm mt-8"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Truck size={16} className="text-green-700" />
                    {progress < 100 
                      ? `Spend $${(shippingThreshold - subtotal).toFixed(2)} more for Free Shipping`
                      : "Complimentary Shipping Unlocked"}
                  </p>
                  <span className="text-xs font-serif italic text-gray-400">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-green-800"
                  />
                </div>
              </motion.div>
            )}
          </header>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {cartItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6 bg-white rounded-[4rem] border border-dashed border-gray-200"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag size={32} className="text-green-800/30" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif">Your bag is breathing light.</h3>
                    <p className="text-gray-400 font-light max-w-xs mx-auto">It seems you haven't discovered any botanical rituals yet.</p>
                  </div>
                  <Link to="/shop">
                    <button className="mt-4 px-10 py-4 bg-[#1A2E1A] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-green-900 transition-all">
                      Start Exploring
                    </button>
                  </Link>
                </motion.div>
              ) : (
                cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Trust Badges */}
          {cartItems.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck size={18}/>, title: "Secure Checkout", desc: "256-bit Encryption" },
                { icon: <Sparkles size={18}/>, title: "Pure Ingredients", desc: "No Synthetics" },
                { icon: <Truck size={18}/>, title: "Planet Friendly", desc: "Plastic-Free Shipping" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white/40 rounded-[2rem] border border-gray-100/50">
                  <div className="text-green-800 mb-3">{badge.icon}</div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">{badge.title}</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-tighter">{badge.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- RIGHT: SUMMARY SIDEBAR --- */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CartSummary />
            
            {/* Encouragement Note */}
            <p className="mt-6 text-center text-[10px] text-gray-400 font-serif italic leading-relaxed px-8">
              "By choosing these rituals, you are supporting organic small-batch farmers in the foothills of the Himalayas."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;