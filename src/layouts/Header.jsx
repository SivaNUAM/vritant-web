import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, User, Menu, X, Sparkles, ArrowRight, Twitter, Instagram } from "lucide-react";
import useCart from "../hooks/useCart";
import Logo from "../assets/Logo.png";

// Import your products data (adjust path according to your project structure)
import { products } from "../data/products"; // ← change this to correct path

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Search functionality states
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Filter products for suggestions
  const filteredSuggestions = searchQuery.trim()
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : products.slice(0, 6); // show some popular items when empty

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 800);
    setMobileMenuOpen(false);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileMenuOpen]);

  // Auto focus search input + close on ESC
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [searchOpen]);

  const handleSuggestionClick = (product) => {
    setSearchOpen(false);
    setSearchQuery("");
    // You can change this route to your actual product detail page
    navigate(`/product/${product.id}`);
    // Alternative: navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Philosophy", path: "/about" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* FULL PAGE TRANSITION LOADER - unchanged */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[200] bg-[#FDFCF8] flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] bg-green-100/40 rounded-full blur-[120px] -z-10"
            />

            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-green-800/20 rounded-full scale-[2.5]"
              />
              
              <motion.div
                animate={{ 
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={48} strokeWidth={1} className="text-green-900" />
              </motion.div>
            </div>

            <div className="mt-16 overflow-hidden flex flex-col items-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-serif italic text-green-900 tracking-tight"
              >
                Vritant
              </motion.h2>
              
              <div className="w-32 h-[1px] bg-green-900/10 mt-4 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-green-800 w-1/2"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-[8px] font-black uppercase tracking-[0.8em] text-green-900/30 ml-[0.8em]"
              >
                Aligning Rituals
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            layout
            className={`relative flex items-center justify-between transition-all duration-500 ${
              isScrolled 
              ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 px-5 py-2.5 rounded-full" 
              : "bg-transparent px-2 py-2"
            }`}
          >
            {/* BRAND LOGO - unchanged */}
            <Link to="/" className="flex items-center gap-3 lg:gap-4 group shrink-0 relative">
              <div className="relative">
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative z-10"
                >
                  <img 
                    src={Logo} 
                    alt="Vritant Logo" 
                    className="h-8 w-8 lg:h-11 lg:w-11 object-contain drop-shadow-sm" 
                  />
                </motion.div>
                <div className="absolute inset-0 bg-green-200/30 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 -z-10" />
              </div>

              <div className="flex flex-col justify-center leading-none">
                <div className="flex items-baseline overflow-hidden">
                  <span className="text-xl lg:text-3xl font-serif font-black tracking-[-0.05em] text-[#1A2E1A] flex">
                    <span className="inline-block group-hover:translate-y-[-2px] transition-transform duration-500">
                      VRI
                    </span>
                    <span className="relative flex flex-col overflow-hidden">
                      <span className="text-green-700 font-light italic tracking-tight pl-0.5 transform transition-all duration-700 group-hover:translate-y-[-110%] group-hover:opacity-0">
                        TANT
                      </span>
                      <span className="absolute top-full left-0 text-green-900 font-serif italic font-medium tracking-tighter pl-0.5 transition-all duration-700 group-hover:translate-y-[-100%]">
                        TANT
                      </span>
                    </span>
                  </span>
                </div>
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 'auto' }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-[7px] lg:text-[8px] font-bold uppercase tracking-[0.5em] text-green-800/40">
                    By Anjana Raj
                  </span>
                </motion.div>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION - unchanged */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="relative group text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-[#1A2E1A]/70 hover:text-[#1A2E1A] transition-colors"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span layoutId="activeNav" className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-700 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ACTION ICONS */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 text-[#1A2E1A] hover:bg-green-50 rounded-full transition-colors"
              >
                <Search size={18} />
              </button>
              
              <Link to="/cart" className="group relative p-2.5 lg:p-3 bg-[#1A2E1A] text-white rounded-full active:scale-90 shadow-xl shadow-green-900/10">
                <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[9px] font-black w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 ml-1 text-[#1A2E1A] z-[60]"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* MOBILE NAVIGATION OVERLAY - unchanged */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 h-[100dvh] w-full bg-[#FDFCF8] md:hidden z-50 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <h2 className="text-[25vw] sm:text-[20vw] font-serif italic font-black text-black/[0.03] whitespace-nowrap leading-none">
                  VRITANT
                </h2>
              </div>

              <div className="flex flex-col h-full pt-32 px-8 pb-12 relative z-10">
                <div className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.name}
                    >
                      <Link 
                        to={link.path}
                        className={`text-5xl font-serif transition-colors ${location.pathname === link.path ? 'text-green-700' : 'text-[#1A2E1A]'}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto flex justify-between items-center text-green-900/40 border-t border-gray-100 pt-8">
                  <span className="text-[10px] font-black uppercase tracking-widest">Est. 1994</span>
                  <div className="flex gap-6">
                    <Instagram size={20} />
                    <Twitter size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── SEARCH MODAL WITH PRODUCT SUGGESTIONS ──────────────────────────────── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/65 backdrop-blur-md flex items-start justify-center pt-20 md:pt-32 px-4 sm:px-6"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -40, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute -top-16 right-0 text-white/70 hover:text-white p-3"
              >
                <X size={32} />
              </button>

              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search herbs, oils, powders..."
                  autoFocus
                  className="
                    w-full bg-white/95 backdrop-blur-lg 
                    border border-green-900/20 rounded-2xl 
                    py-6 px-8 text-xl md:text-3xl 
                    text-[#1A2E1A] placeholder:text-gray-400/70
                    focus:outline-none focus:ring-2 focus:ring-green-700/30
                    shadow-2xl shadow-black/20
                  "
                />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-green-800/50">
                  <Search size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Suggestions list */}
              <div className="mt-5 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-900/10 overflow-hidden max-h-[55vh] overflow-y-auto">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSuggestionClick(product)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-green-50 transition-colors text-left border-b border-gray-100 last:border-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0 border border-gray-200"
                      />
                      <div>
                        <div className="font-medium text-[#1A2E1A]">{product.name}</div>
                        <div className="text-sm text-gray-600">{product.category} • ₹{product.price}</div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-10 text-center text-gray-500 text-lg">
                    No products found for "{searchQuery}"
                  </div>
                )}
              </div>

              {/* Hint when empty */}
              {searchQuery.trim() === "" && (
                <div className="mt-6 text-center text-white/70 text-sm">
                  Popular: Ashwagandha, Brahmi, Triphala, Shilajit, Saffron...
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;