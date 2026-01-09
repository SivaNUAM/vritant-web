import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Leaf, ShieldCheck, Truck, Sparkles, MoveRight } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Vedic Purity",
    description: "Cold-pressed extraction preserves the 'Prana' (life force) of every herb.",
    tag: "Nature"
  },
  {
    icon: ShieldCheck,
    title: "Gold Standard",
    description: "Surpassing international safety norms with 100% heavy-metal-free certification.",
    tag: "Quality"
  },
  {
    icon: Truck,
    title: "Fresh Harvest",
    description: "From farm to formulation in under 48 hours to ensure enzyme activity.",
    tag: "Speed"
  },
];

// Interactive Card Component with Spotlight Effect
const BenefitCard = ({ item, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-[#1a2e1a] rounded-[3rem] p-1 border border-white/10 overflow-hidden"
    >
      {/* Spotlight Gradient Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useSpring(
            useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
            )
          ),
        }}
      />

      <div className="relative h-full bg-[#152615] rounded-[2.9rem] p-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-12">
            <div className="w-14 h-14 bg-green-900/50 rounded-2xl flex items-center justify-center border border-green-700/30 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <item.icon size={28} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-green-500/50 font-bold border border-green-500/20 px-3 py-1 rounded-full">
              {item.tag}
            </span>
          </div>

          <h3 className="text-3xl font-serif text-white mb-6 leading-tight">
            {item.title}
          </h3>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            {item.description}
          </p>
        </div>

        <div className="mt-12 flex items-center gap-4 text-white group-hover:gap-6 transition-all duration-500 cursor-pointer">
          <span className="text-sm font-medium tracking-widest uppercase">Learn More</span>
          <MoveRight className="text-green-500" size={20} />
        </div>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax background text movement
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-40 bg-[#0c160c] overflow-hidden relative">
      {/* Parallax Background Text - The "Editorial" Touch */}
      <div className="absolute top-20 left-0 right-0 pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.02]">
        <motion.h2 style={{ x: xLeft }} className="text-[20vw] font-serif text-white uppercase leading-none">
          Holistic Wisdom Holistic Wisdom
        </motion.h2>
        <motion.h2 style={{ x: xRight }} className="text-[20vw] font-serif text-white uppercase leading-none italic">
          Natural Healing Natural Healing
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 text-green-500">
              <Sparkles size={18} />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Ancient Science</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] tracking-tighter">
              The Alchemy of <br />
              <span className="italic font-light text-green-400">Pure Nature</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-xl font-light italic border-l border-green-900/50 pl-8">
            "Your body is the temple of nature. We provide the offerings."
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <BenefitCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;