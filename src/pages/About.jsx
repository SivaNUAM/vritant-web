import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Heart, Shield, Sparkles, Droplets, Sun, Wind, Users } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div ref={containerRef} className="bg-[#FDFCF8] text-[#1A2E1A]">
      
      {/* --- SECTION 1: HERO (Cinematic) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="z-10 text-center"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-green-800/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-800">Est. 1994</span>
            <div className="h-[1px] w-12 bg-green-800/30" />
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-serif leading-none tracking-tighter mb-8">
            Our <span className="italic font-light text-green-900/40">Story</span>
          </h1>
          <p className="text-gray-400 font-serif italic text-xl max-w-lg mx-auto">
            A journey from the foothills of the Himalayas to the modern sanctuary of your home.
          </p>
        </motion.div>

        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute -right-20 top-40 w-96 h-96 bg-green-100/50 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute -left-20 bottom-20 w-80 h-80 bg-orange-50/50 rounded-full blur-[100px] -z-10" 
        />
      </section>

      {/* --- SECTION 2: THE SPLIT STORY --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <motion.div 
             initial={{ clipPath: 'inset(100% 0 0 0)' }}
             whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="aspect-[4/5] rounded-[3rem] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              alt="Harvesting"
            />
          </motion.div>
          <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-[2rem] shadow-xl max-w-[240px] hidden md:block">
            <p className="text-sm italic text-gray-500 font-serif leading-relaxed">
              "We don't just harvest plants; we harvest the energy of the sun and soil."
            </p>
          </div>
        </div>

        <motion.div {...fadeIn} className="space-y-10">
          <h2 className="text-5xl font-serif leading-tight">Beyond Simple <br/> <span className="italic text-green-800/60">Botanicals</span></h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            While the world moved toward synthetic shortcuts, we turned back to the manuscripts of 5,000 years ago. Ayurveda is the 
            <span className="text-green-900 font-medium italic mx-1">Science of Life</span>, and we treat it with the precision of high-biotechnology.
          </p>
          
          <div className="space-y-6 pt-6">
            {[
              { icon: <Droplets size={20}/>, text: "Steam-distilled essential elixirs" },
              { icon: <Sun size={20}/>, text: "Slow-cured oils under solar cycles" },
              { icon: <Wind size={20}/>, text: "Air-dried roots to preserve Prana" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-green-900/70">
                <span className="p-3 bg-green-50 rounded-full text-green-700">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 3: INTERACTIVE MILESTONES --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { year: "1994", label: "The Seed", desc: "First apothecary opened in Kerala." },
              { year: "2005", label: "Expansion", desc: "Partnership with 40+ organic farms." },
              { year: "2018", label: "Digital Era", desc: "Bringing Vedic wisdom global." },
              { year: "2026", label: "New Horizons", desc: "Advanced bio-ayurvedic research." }
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-gray-100 hover:border-green-800 transition-colors py-4"
              >
                <span className="text-4xl font-serif text-green-900/20 absolute -left-4 top-0 bg-white px-2 tracking-tighter">{m.year}</span>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 mt-8">{m.label}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: DARK PHILOSOPHY GRID --- */}
      <section className="bg-[#0D1A0D] py-32 rounded-t-[5rem] lg:rounded-t-[10rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.h2 {...fadeIn} className="text-5xl md:text-7xl font-serif text-white mb-6">Our Core <span className="italic text-green-400/40">Manifesto</span></motion.h2>
            <div className="w-20 h-1 bg-green-500/20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { icon: <Leaf />, title: "Wild Harvested", desc: "We source our herbs when the 'Jiva' (spirit) is at its peak, following lunar cycles." },
              { icon: <Shield />, title: "Scientific Vedic", desc: "Every drop is triple-filtered and tested in small batches for clinical purity." },
              { icon: <Users />, title: "Community First", desc: "Fair-trade practices that empower the families who tend the Himalayan soil." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -20 }}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/10 text-green-400 mb-8 group-hover:bg-green-400 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-green-100/40 leading-relaxed text-sm font-light px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: THE FOUNDER (Elegant Quote) --- */}
      <section className="py-32 bg-[#FDFCF8] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="mb-12"
          >
            <Sparkles className="mx-auto text-green-700/20 w-16 h-16" />
          </motion.div>
          
          <h3 className="text-3xl md:text-5xl font-serif italic text-[#1A2E1A] leading-[1.3] mb-12">
            "We do not inherit the earth from our ancestors; we borrow it from our children. Our remedies are designed to heal the person and the planet simultaneously."
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-4 ring-4 ring-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Founder" className="object-cover w-full h-full" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-green-900">Dr. Amara Varma</p>
            <p className="text-gray-400 text-[9px] uppercase tracking-widest mt-1 italic">Chief Visionary & Formulator</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CTA --- */}
      <section className="pb-32 px-6">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="max-w-7xl mx-auto bg-green-900 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8 relative z-10">Ready to begin your <br/> <span className="italic font-light">healing journey?</span></h2>
          <button className="bg-white text-green-900 px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] relative z-10 hover:bg-green-50 transition-colors shadow-2xl">
            Explore the Edit
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;