import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  Truck, 
  CreditCard 
} from "lucide-react";

const Checkout = () => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate a sacred moment of order processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsOrdered(true);
    }, 2500);
  };

  if (isOrdered) {
    return <OrderManifested />;
  }

  return (
    <div className="bg-[#FDFCF8] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* --- LEFT SIDE: SHIPPING SANCTUARY --- */}
        <div className="lg:col-span-7 space-y-12">
          <header>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-green-800" size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-800/60">Secure Manifestation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#1A2E1A]">Checkout</h1>
          </header>

          <form onSubmit={handlePlaceOrder} className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-300 border-b border-gray-100 pb-4">01. Shipping Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white border border-gray-100 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-green-800/10 transition-all placeholder:text-gray-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-gray-100 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-green-800/10 transition-all placeholder:text-gray-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="md:col-span-2 w-full bg-white border border-gray-100 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-green-800/10 transition-all placeholder:text-gray-300"
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-white border border-gray-100 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-green-800/10 transition-all placeholder:text-gray-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full bg-white border border-gray-100 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-green-800/10 transition-all placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-300 border-b border-gray-100 pb-4">02. Payment Method</h3>
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:border-green-800/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-900">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Pay on Delivery</p>
                    <p className="text-xs text-gray-400">Pure trust. Pay when your ritual arrives.</p>
                  </div>
                </div>
                <div className="w-6 h-6 border-2 border-green-900 rounded-full flex items-center justify-center p-1">
                    <div className="w-full h-full bg-green-900 rounded-full" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#1A2E1A] text-white py-6 rounded-3xl font-black uppercase text-[10px] tracking-[0.4em] flex items-center justify-center gap-4 shadow-2xl shadow-green-900/20 hover:bg-green-900 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isProcessing ? "Aligning Rituals..." : "Place Order"}
              {!isProcessing && <ArrowRight size={16} />}
            </button>
          </form>
        </div>

        {/* --- RIGHT SIDE: STICKY ORDER MIRROR --- */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 bg-white/50 backdrop-blur-xl border border-white rounded-[3.5rem] p-10 shadow-sm">
            <h2 className="text-2xl font-serif mb-8 italic">Your Treasures</h2>
            
            <div className="space-y-6 mb-10">
              {/* Example Item */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold">Moonlight Abhyanga Oil</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Qty: 1</p>
                </div>
                <span className="text-sm font-bold">$78.00</span>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-100/50">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Subtotal</span>
                <span className="font-bold text-gray-950">$78.00</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Shipping</span>
                <span className="text-green-700 font-black uppercase tracking-tighter">Complimentary</span>
              </div>
              <div className="flex justify-between text-3xl font-serif pt-4 text-green-950">
                <span>Total Due</span>
                <span>$78.00</span>
              </div>
            </div>

            <div className="mt-10 p-6 bg-green-50/50 rounded-3xl border border-green-100/50 flex gap-4">
                <Leaf className="text-green-800 shrink-0" size={18} />
                <p className="text-[10px] leading-relaxed text-green-900/60 uppercase font-bold tracking-tight">
                    Every order includes a hand-picked Himalayan botanical sample.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SUCCESS STATE UI --- */
const OrderManifested = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-[#FDFCF8] z-50 flex items-center justify-center p-6"
        >
            <div className="max-w-2xl text-center space-y-12">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center mx-auto text-white"
                >
                    <CheckCircle2 size={40} />
                </motion.div>
                
                <div className="space-y-4">
                    <h1 className="text-6xl font-serif text-green-950">Order <span className="italic font-light opacity-40">Manifested.</span></h1>
                    <p className="text-gray-400 font-serif text-xl italic">Your rituals are being prepared in our botanical sanctuary.</p>
                </div>

                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 grid grid-cols-2 gap-8 text-left shadow-sm">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">Order Tracking</p>
                        <p className="font-bold text-lg">#AV-2026-991</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <p className="font-bold text-lg">Preparing</p>
                        </div>
                    </div>
                </div>

                <button 
                  onClick={() => window.location.href = "/"}
                  className="bg-[#1A2E1A] text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:scale-105 transition-all shadow-xl"
                >
                    Return to Sanctuary
                </button>
            </div>
        </motion.div>
    );
};

export default Checkout;