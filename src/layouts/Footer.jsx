import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "My Shop", path: "/shop" },
  { label: "Our Story", path: "/about" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // --- BACKGROUND WRITTEN LOGIC ---
  const companyName = "VRITANT";
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < companyName.length) {
        setDisplayText(companyName.substring(0, i + 1));
        i++;
      } else {
        setTimeout(() => { 
          i = 0; 
          setDisplayText(""); 
        }, 6000); // Longer pause before restart
      }
    }, 400); 
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <footer className="bg-[#0D1A0D] text-[#E8EDE8] pt-16 lg:pt-24 pb-8 lg:pb-12 relative overflow-hidden">
      
      {/* 1. REDUCED BG UI: Subtle Written Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }} // Reduced opacity for cleaner UI
          className="text-[18vw] font-serif font-black tracking-tighter text-white whitespace-nowrap leading-none"
        >
          {displayText}
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="inline-block w-[1px] h-[0.7em] bg-white/30 ml-1 lg:ml-4"
          />
        </motion.h2>
      </div>

      {/* 2. DECORATIVE GLOW (Reduced size for mobile) */}
      <div className="absolute top-0 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-green-800/10 blur-[100px] lg:blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- TOP SECTION: NEWSLETTER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 lg:pb-16 border-b border-green-800/30 gap-8 lg:gap-10">
          <div className="max-w-md w-full">
            <h3 className="text-2xl lg:text-3xl font-serif mb-3 italic">Join the Wellness Circle</h3>
            <p className="text-green-200/50 text-xs lg:text-sm">Subscribe for ancient wisdom and exclusive offers.</p>
          </div>
          <div className="w-full max-w-md relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-green-900 py-3 lg:py-4 pr-12 focus:outline-none focus:border-green-500 transition-colors placeholder:text-green-900 text-base lg:text-lg"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 group p-2">
              <ArrowRight className="text-green-500 group-hover:translate-x-1 transition-transform w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 lg:py-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-green-900 rounded-full flex items-center justify-center">
                <Leaf size={18} className="text-green-400" />
              </div>
              <span className="text-xl lg:text-2xl font-serif tracking-tight uppercase">Vritant</span>
            </div>
            <p className="text-green-200/40 text-xs lg:text-sm leading-relaxed max-w-xs">
              Synthesizing ancient Vedic wisdom with modern purity standards for nature's most potent remedies.
            </p>
            <div className="flex gap-3 lg:gap-4 pt-2">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -3 }}
                  href="#" 
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-green-900 flex items-center justify-center text-green-600 hover:bg-green-900 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-6 lg:mb-8">Company</h4>
            <ul className="grid grid-cols-1 gap-3 lg:gap-4 text-green-200/60 text-xs lg:text-sm font-medium">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className="flex items-center gap-2 group hover:text-green-400 transition-colors">
                    <span className="w-0 h-[1px] bg-green-400 group-hover:w-3 transition-all"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-6 lg:mb-8">Categories</h4>
            <ul className="grid grid-cols-1 gap-3 lg:gap-4 text-green-200/60 text-xs lg:text-sm font-medium">
              {['Herbal Powders', 'Hair Care', 'Skin Elixirs', 'Vitality Resin'].map((cat) => (
                <li key={cat} className="hover:text-green-400 transition-colors cursor-pointer">{cat}</li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-6 lg:mb-8">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-xs lg:text-sm">
                <MapPin size={16} className="text-green-700 shrink-0 mt-0.5" />
                <span className="text-green-200/50">108 Vedic Valley, Green Hills, Kerala 682001</span>
              </div>
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <Phone size={16} className="text-green-700 shrink-0" />
                <span className="text-green-200/50">+91 1234567890</span>
              </div>
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <Mail size={16} className="text-green-700 shrink-0" />
                <span className="text-green-200/50">support@vritant.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="pt-8 lg:pt-10 border-t border-green-900/50 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-green-900 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-center sm:text-left">
            © {currentYear} Vritant. Crafted for Vitality.
          </p>
          <div className="flex gap-6 lg:gap-8 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-green-900">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-500 transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;