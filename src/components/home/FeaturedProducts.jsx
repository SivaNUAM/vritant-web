import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import { Sparkles, Search, X, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Memoized filtering - shows top 8 by default or filtered results
  const filteredProducts = useMemo(() => {
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // If no search, we just show a featured selection (first 8)
    return searchQuery ? results : results.slice(0, 8);
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FDFCF8] overflow-hidden relative">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-green-100/40 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* --- HEADER & SEARCH BAR --- */}
        <div className="flex flex-col gap-12 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-green-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-6"
              >
                <div className="h-[1px] w-8 bg-green-700/30" />
                <span>Premium Apothecary</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-serif text-[#1A2E1A] leading-[1.1] tracking-tight"
              >
                The <span className="italic font-light text-green-800/70">Healing</span> <br /> 
                Edit
              </motion.h2>
            </div>

            <div className="relative w-full md:max-w-md group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-700 transition-colors">
                <Search size={20} strokeWidth={1.5} />
              </div>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search remedies..."
                className="w-full bg-white border border-gray-100 py-5 pl-14 pr-12 rounded-2xl shadow-sm focus:ring-4 focus:ring-green-700/5 focus:border-green-700/30 outline-none transition-all font-medium text-[#1A2E1A] placeholder:text-gray-300"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-50 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-x-8 lg:gap-y-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.id} 
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- EMPTY STATE --- */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
              <Search size={40} className="text-gray-200" />
            </div>
            <h3 className="text-2xl font-serif text-[#1A2E1A]">No remedies found</h3>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-6 text-green-700 font-bold text-[10px] uppercase tracking-widest border-b border-green-700 pb-1"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* --- DISCOVER MORE BUTTON (NAVIGATION ONLY) --- */}
        {!searchQuery && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 flex justify-center"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-8 bg-[#1A2E1A] text-white pl-10 pr-3 py-3 rounded-full shadow-[0_20px_50px_rgba(26,46,26,0.15)] overflow-hidden"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.25em] z-10">Discover Full Collection</span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2E1A] transition-all duration-500 z-10">
                  <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-green-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;