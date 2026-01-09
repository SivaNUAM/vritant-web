import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Leaf } from "lucide-react";
import Button from "../common/Button";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    // min-h-screen ensures it fills the desktop view perfectly
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFCF8] pt-20 lg:pt-0">
      
      {/* 1. BACKGROUND AMBIENCE */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute top-[-10%] left-[-5%] w-[60%] lg:w-[45%] h-[60%] bg-[#edf4e9] rounded-full blur-[80px] lg:blur-[140px] opacity-60 z-0" 
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">
          
          {/* 2. TEXT CONTENT (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-green-800/30" />
                <span className="text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-green-800/60">
                  Est. 1994 • Authentic Wellness
                </span>
              </div>

              <h1 className="text-[12vw] sm:text-7xl lg:text-[100px] font-serif text-[#1A2E1A] leading-[1] lg:leading-[0.85] tracking-tighter mb-6">
                Nature’s <br />
                <span className="relative inline-block">
                  Pharmacy
                  <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-green-200/80" 
                    viewBox="0 0 300 10" fill="none"
                  >
                    <path d="M1 8C50 2 150 2 299 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </motion.svg>
                </span>
                <br />
                <span className="text-green-700 italic font-light">Refined.</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed font-light mb-10">
                Bridging ancient Vedic wisdom and modern science 
                for 100% plant-based healing.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Link to="/shop" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#1A2E1A] text-white px-10 py-5 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group">
                    Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-xs font-bold text-gray-800">2k+ Happy Souls</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. IMAGE STACK (Spans 5 cols on desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full"
            >
              {/* Premium Image Frame */}
              <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[8px] lg:border-[16px] border-white aspect-[4/5] z-10">
                <img
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1200"
                  alt="Ayurveda Premium"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Glass Floating Card - Locked to not break desktop container */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-4 lg:-right-10 top-1/4 backdrop-blur-xl bg-white/80 p-5 lg:p-7 rounded-[2rem] shadow-2xl border border-white/50 max-w-[150px] lg:max-w-[200px] z-20 hidden sm:block"
              >
                <div className="bg-green-700 w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white shadow-lg shadow-green-900/20">
                  <Leaf size={20} />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Hand-harvested in the Himalayas</p>
                <p className="text-[10px] uppercase tracking-widest text-green-700 mt-2 font-bold">100% Organic</p>
              </motion.div>

              {/* Circular Badge */}
              <div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-28 h-28 lg:w-40 lg:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center text-center p-4 z-20">
                <div className="animate-spin-slow absolute inset-0 rounded-full border-t-2 border-green-100 border-dashed" />
                <span className="text-[9px] lg:text-[11px] font-black uppercase tracking-tighter text-gray-400">
                  Non-GMO <br /> Gluten Free <br /> Vegan
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. REFINED SOCIAL BAR */}
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 [writing-mode:vertical-lr]">
        <span className="hover:text-green-800 cursor-pointer transition-colors">Instagram</span>
        <span className="hover:text-green-800 cursor-pointer transition-colors">Pinterest</span>
        <div className="h-20 w-[1px] bg-gray-200 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;