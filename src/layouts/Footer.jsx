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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1A0D] text-[#E8EDE8] pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Organic Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-800/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* --- TOP SECTION: NEWSLETTER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center pb-16 border-b border-green-800/50 gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-3xl font-serif mb-4 italic">Join the Wellness Circle</h3>
            <p className="text-green-200/60 text-sm">Subscribe to receive ancient wisdom, wellness tips, and exclusive offers.</p>
          </div>
          <div className="w-full max-w-md relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-green-700 py-4 pr-12 focus:outline-none focus:border-green-400 transition-colors placeholder:text-green-800 text-lg"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 group">
              <ArrowRight className="text-green-400 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
                <Leaf size={20} className="text-green-300" />
              </div>
              <span className="text-2xl font-serif tracking-tight uppercase">Ayurveda</span>
            </div>
            <p className="text-green-200/50 text-sm leading-relaxed">
              Synthesizing ancient Vedic wisdom with modern purity standards to bring you nature's most potent remedies.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -3 }}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-green-800 flex items-center justify-center text-green-400 hover:bg-green-800 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-green-200/60 text-sm font-medium">
              {['Home', 'Shop All', 'Our Story', 'Wholesale', 'Sustainability'].map((link) => (
                <li key={link} className="hover:text-green-400 transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-green-400 group-hover:w-4 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Categories</h4>
            <ul className="space-y-4 text-green-200/60 text-sm font-medium">
              {['Herbal Powders', 'Hair Care', 'Skin Elixirs', 'Vitality Resin', 'Home Fragrance'].map((cat) => (
                <li key={cat} className="hover:text-green-400 transition-colors cursor-pointer">{cat}</li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-green-500 shrink-0" />
                <span className="text-green-200/60">108 Vedic Valley, Green Hills, Kerala 682001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-green-500 shrink-0" />
                <span className="text-green-200/60">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-green-500 shrink-0" />
                <span className="text-green-200/60">support@ayurveda.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="pt-10 border-t border-green-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-green-900 text-[10px] font-black uppercase tracking-[0.3em]">
            © {currentYear} Ayurveda Store. Crafted for Vitality.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-green-800">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-500 transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;