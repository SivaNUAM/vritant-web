import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, Star, Heart, Plus, Minus, 
  Search, X, ShieldCheck, Truck, Leaf, RefreshCcw,
  ChevronRight, ChevronLeft, Sparkles
} from "lucide-react";
import useCart from "../../hooks/useCart";

const ProductList = () => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  
  // --- CAROUSEL STATE & DATA ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      id: 1,
      title: "Ancient Wisdom",
      subtitle: "Winter Solstice Collection",
      offer: "Flat 20% Off",
      image: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=1600",
      color: "bg-green-900"
    },
    {
      id: 2,
      title: "Pure Vitality",
      subtitle: "Himalayan Shilajit Resin",
      offer: "Buy 1 Get 1 Free",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
      color: "bg-stone-800"
    },
    {
      id: 3,
      title: "Glow Naturally",
      subtitle: "Saffron & Kumkumadi Oil",
      offer: "New Arrival",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1600",
      color: "bg-orange-950"
    }
  ];

  // Auto-play Carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- PRODUCT STATE & DATA ---
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = ["All", "Herbs", "Elixirs", "Skin", "Wellness"];

  const liveImages = [
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1564277287253-934c868e54ea?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1619671762722-3c2293ca621a?auto=format&fit=crop&q=80&w=800"
  ];

  const allProducts = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: ["Ashwagandha Root", "Tulsi Elixir", "Golden Turmeric", "Brahmi Focus", "Saffron Glow", "Neem Purify", "Amla Vitamin C", "Triphala Cleanse", "Shilajit Vitality", "Moringa Superfood", "Sandalwood Bark", "Guduchi Shield"][i],
    category: ["Herbs", "Elixirs", "Wellness", "Wellness", "Skin", "Skin", "Wellness", "Herbs", "Wellness", "Wellness", "Wellness", "Herbs"][i],
    price: (25 + (i % 5) * 10).toFixed(2),
    image: liveImages[i],
    isNew: i < 2
  })), []);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
<section  className="bg-[#FDFCF8] min-h-screen pb-24">
      
      {/* --- SECTION 1: OFFER CAROUSEL --- */}
      <div className="relative h-[500px] lg:h-[650px] overflow-hidden bg-black mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative h-full w-full"
          >
            <img 
              src={banners[currentSlide].image} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110" 
              alt="Promotion"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start text-white">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-green-400 font-black uppercase tracking-[0.4em] text-xs mb-4"
              >
                {banners[currentSlide].subtitle}
              </motion.span>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-6xl lg:text-8xl font-serif mb-6"
              >
                {banners[currentSlide].title}
              </motion.h2>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6"
              >
                <a href="#products">
                <button className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-green-500 hover:text-white transition-all">
                  Shop Offer
                </button>
                </a>
                <span className="text-2xl italic font-light">{banners[currentSlide].offer}</span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {banners.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-500 ${currentSlide === i ? "w-12 bg-white" : "w-4 bg-white/30"}`} 
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* SECTION 2: TRUST FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: Leaf, title: "100% Organic", desc: "Pure Sourcing" },
            { icon: ShieldCheck, title: "Lab Tested", desc: "Safety First" },
            { icon: Truck, title: "Global Shipping", desc: "Fast Delivery" },
            { icon: RefreshCcw, title: "Easy Returns", desc: "30 Day Window" }
          ].map((feature, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
                <feature.icon size={22} />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1A2E1A]">{feature.title}</h4>
              <p className="text-[9px] text-gray-400 uppercase tracking-tighter mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* SECTION 3: HEADER & SEARCH */}
        <div className="flex flex-col gap-10 mb-16">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-green-700" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-700">The Healer's Choice</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className="text-6xl lg:text-8xl font-serif text-[#1A2E1A] leading-none tracking-tighter">
                Natural <span className="italic font-light text-green-800/40">Remedies</span>
              </h2>
              
              <div className="relative w-full md:max-w-xs group">
                <input 
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 pr-10 focus:border-green-700 outline-none transition-all italic font-serif text-xl"
                />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-green-700" size={20} />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeCategory === cat ? "bg-[#1A2E1A] text-white shadow-xl" : "bg-white text-gray-400 border border-gray-100 hover:border-green-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* SECTION 4: PRODUCT GRID */}

      <motion.div
      id="products"
  layout
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
>
  <AnimatePresence mode="popLayout">
    {filteredProducts.slice(0, visibleCount).map((product) => {
      const cartItem = cartItems?.find(item => item.id === product.id);
      const quantity = cartItem ? cartItem.quantity : 0;

      return (
        <motion.div
          layout
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="
            group flex flex-col h-full
            min-h-[420px] sm:min-h-0
            bg-white rounded-[1.5rem] lg:rounded-[2.5rem]
            p-2 lg:p-3
            border border-gray-100 hover:border-green-100
            transition-all duration-500
            hover:shadow-[0_20px_40px_-10px_rgba(26,46,26,0.1)]
          "
        >
          {/* IMAGE */}
          <div
            className="
              relative aspect-[3/4] sm:aspect-[4/5]
              overflow-hidden rounded-[1.2rem] lg:rounded-[2rem]
              bg-[#F7F8F6] mb-4 lg:mb-5
            "
          >
            <Link to={`/product/${product.id}`} className="block h-full w-full">
              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover"
              />
            </Link>

            {product.isNew && (
              <span className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-[#1A2E1A] text-white text-[7px] lg:text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-lg">
                New
              </span>
            )}
          </div>

          {/* INFO */}
          <div className="px-2 lg:px-3 flex-grow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-green-700">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star size={8} className="fill-yellow-400 text-yellow-400" />
                <span className="text-[8px] lg:text-[10px] font-bold text-gray-400">
                  4.9
                </span>
              </div>
            </div>

            <h3 className="font-serif text-[15px] lg:text-xl text-[#1A2E1A] leading-tight mb-2 line-clamp-1">
              {product.name}
            </h3>

            <p className="text-sm lg:text-lg font-serif font-bold text-[#1A2E1A]">
              ${product.price}
            </p>
          </div>

          {/* CART (LOGIC UNCHANGED) */}
          <div className="mt-auto px-2 lg:px-3 pt-4 pb-2 lg:pb-3 border-t border-gray-50">
            <div className="relative h-11 lg:h-12 w-full overflow-hidden rounded-xl lg:rounded-2xl">
              <AnimatePresence mode="wait">
                {quantity === 0 ? (
                <motion.button
  onClick={() => addToCart(product)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="group relative w-full flex items-center justify-center gap-2
    bg-[#1A2E1A] text-white
    h-10 lg:h-12 px-2
    rounded-xl lg:rounded-2xl
    shadow-md
    overflow-hidden
    transition-all duration-300"
>
  {/* Text */}
  <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap z-10">
    Add to Bag
  </span>

  {/* Icon */}
  <ShoppingBag className="w-3.5 h-3.5 z-10 transition-transform duration-300 group-hover:rotate-12" />

  {/* Hover Slide Overlay */}
  <div className="absolute inset-0 bg-green-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
</motion.button>

                ) : (
                  <motion.div
                    key="toggle"
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    exit={{ y: -40 }}
                    className="absolute inset-0 w-full flex items-center justify-between bg-green-50 px-2"
                  >
                    <button
                      onClick={() =>
                        quantity === 1
                          ? removeFromCart(product.id)
                          : updateQuantity(product.id, quantity - 1)
                      }
                      className="w-10 h-full flex items-center justify-center text-green-900 hover:bg-white rounded-xl transition-all"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-black text-[#1A2E1A] text-base tabular-nums">
                      {quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-10 h-full flex items-center justify-center text-green-900 hover:bg-white rounded-xl transition-all"
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
    })}
  </AnimatePresence>
</motion.div>


        {/* SECTION 5: SEE MORE */}
        {filteredProducts.length > visibleCount && (
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-24 flex justify-center"
>
  <motion.button
    onClick={() => setVisibleCount(filteredProducts.length)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex items-center gap-8 bg-[#1A2E1A] text-white pl-10 pr-3 py-3 rounded-full shadow-[0_20px_50px_rgba(26,46,26,0.15)] overflow-hidden"
  >
    <span className="text-[11px] font-black uppercase tracking-[0.25em] z-10">
      Expand Collection
    </span>

    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2E1A] transition-all duration-500 z-10">
      <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
    </div>

    <div className="absolute inset-0 bg-green-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
  </motion.button>
</motion.div>

        )}
      </div>
    </section>
  );
};

export default ProductList;