import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, User, Menu, X, Sparkles, ArrowRight, Twitter, Instagram } from "lucide-react";
import useCart from "../hooks/useCart";
import Logo from "../assets/Logo.png";

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Philosophy", path: "/about" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 1. FULL PAGE TRANSITION LOADER */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#FDFCF8] flex flex-col items-center justify-center"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="relative">
               <Sparkles size={40} className="text-green-800 opacity-20" />
               <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-green-800/30 rounded-full scale-150" />
            </motion.div>
            <p className="mt-8 text-[9px] font-black uppercase tracking-[0.6em] text-green-900/40">
              Aligning Rituals
            </p>
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
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
               <img src={Logo} alt="Logo" className="h-7 w-7 lg:h-9 lg:w-9" />
               <span className="text-lg lg:text-2xl font-serif font-bold tracking-tighter text-[#1A2E1A]">
                VRI<span className="text-green-700 font-light italic">TANT</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
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
              <button className="p-2 text-[#1A2E1A] hover:bg-green-50 rounded-full hidden sm:flex">
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

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 ml-1 text-[#1A2E1A] z-[60]"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- MOBILE NAVIGATION OVERLAY (YOUR ORIGINAL UI) --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 h-[100dvh] w-full bg-[#FDFCF8] md:hidden z-50 overflow-hidden flex flex-col"
            >
              {/* --- BACKGROUND WATERMARK: FIXED & RESPONSIVE --- */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <h2 className="text-[25vw] sm:text-[20vw] font-serif italic font-black text-black/[0.03] whitespace-nowrap leading-none">
                  VRITANT
                </h2>
              </div>

              {/* --- YOUR ORIGINAL LINKS & LAYOUT --- */}
              <div className="flex flex-col h-full pt-32 px-8 pb-12 relative z-10">
                <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6">
                   <span className="font-serif italic text-xl">Menu</span>
                   <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-50 rounded-full"><X size={24} /></button>
                </div>

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

                {/* SOCIALS AT BOTTOM */}
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
    </>
  );
};

export default Header;