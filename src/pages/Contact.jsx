import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ArrowRight,
  Globe,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FDFCF8] text-[#1A2E1A] min-h-screen">
      
      {/* --- SECTION 1: ELEGANT HERO --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, tracking: "0.1em" }}
          animate={{ opacity: 1, tracking: "0.5em" }}
          className="text-[10px] font-black uppercase text-green-800/60 block mb-6"
        >
          Get in Touch
        </motion.span>
        <motion.h1 
          {...fadeInUp}
          className="text-6xl md:text-8xl font-serif leading-tight mb-8"
        >
          Let’s Start a <br />
          <span className="italic font-light text-green-900/40">Healing Dialogue</span>
        </motion.h1>
        <p className="text-gray-400 font-serif italic text-xl max-w-xl mx-auto">
          Whether you have a question about your Dosha or want to partner with us, our doors are always open.
        </p>
      </section>

      {/* --- SECTION 2: THE CONTACT HUB --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Info & Departments */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-800 group-hover:bg-green-800 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                  <p className="text-lg font-medium">hello@auraveda.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-800 group-hover:bg-green-800 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                  <p className="text-lg font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-800 group-hover:bg-green-800 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Visit the Studio</p>
                  <p className="text-lg font-medium leading-relaxed">72nd Wellness Way, <br/>Kochi, Kerala 682001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-serif text-lg mb-2">Wholesale</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Want to stock our elixirs in your boutique?</p>
              <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-green-800 flex items-center gap-2">
                Learn More <ArrowRight size={12} />
              </button>
            </div>
            <div className="p-6 rounded-[2rem] bg-green-900 text-white shadow-sm">
              <h4 className="font-serif text-lg mb-2">Press</h4>
              <p className="text-xs text-green-100/60 leading-relaxed">Media inquiries and brand collaborations.</p>
              <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-green-300 flex items-center gap-2">
                Media Kit <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: High-End Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-2xl shadow-green-900/5 border border-gray-50"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Arjun Sharma"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-green-800/20 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="arjun@example.com"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-green-800/20 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Subject</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-green-800/20 outline-none transition-all text-gray-500">
                  <option>General Inquiry</option>
                  <option>Product Support</option>
                  <option>Dosha Consultation</option>
                  <option>Shipping & Returns</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you thrive today?"
                  className="w-full bg-gray-50 border-none rounded-3xl p-6 focus:ring-2 focus:ring-green-800/20 outline-none transition-all placeholder:text-gray-300 resize-none"
                />
              </div>
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group relative w-full bg-[#1A2E1A] text-white py-6 rounded-2xl
    font-black uppercase text-[10px] tracking-[0.3em]
    shadow-xl overflow-hidden
    transition-all duration-300
    flex items-center justify-center gap-4"
>
  {/* Content */}
  <span className="relative z-10 flex items-center gap-4">
    Send Message <MessageCircle size={16} />
  </span>

  {/* Hover background slide (THIS is what was missing) */}
  <div className="absolute inset-0 bg-green-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
</motion.button>

            </form>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: GLOBAL PRESENCE & FAQ --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-serif mb-8 text-green-900">Global Offices</h3>
            <div className="space-y-8">
              {[
                { city: "Kerala", region: "The Mother Sanctuary", coords: "9.9312° N, 76.2673° E" },
                { city: "London", region: "European Atelier", coords: "51.5074° N, 0.1278° W" },
                { city: "New York", region: "Concept Store", coords: "40.7128° N, 74.0060° W" }
              ].map((office, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 group cursor-default">
                  <div>
                    <h4 className="text-xl font-serif group-hover:text-green-700 transition-colors">{office.city}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{office.region}</p>
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 italic">{office.coords}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F4F2EE] rounded-[3rem] p-12">
            <h3 className="text-2xl font-serif mb-6">Common Inquiries</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-bold text-sm">When will I receive my order?</p>
                <p className="text-sm text-gray-500 font-light">Domestic orders arrive within 3-5 business days. International shipping varies by location.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-sm">Are your products vegan?</p>
                <p className="text-sm text-gray-500 font-light">Yes, 100% of our formulations are plant-based and cruelty-free.</p>
              </div>
              <div className="pt-4 flex gap-4">
                <Instagram size={18} className="text-green-800/40 hover:text-green-800 transition-colors cursor-pointer" />
                <Linkedin size={18} className="text-green-800/40 hover:text-green-800 transition-colors cursor-pointer" />
                <Globe size={18} className="text-green-800/40 hover:text-green-800 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MAP PLACEHOLDER / IMAGE --- */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-[400px] rounded-[4rem] overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Sanctuary Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;