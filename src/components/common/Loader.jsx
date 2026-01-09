import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-32 space-y-8">
      <div className="relative flex items-center justify-center">
        
        {/* --- Outer Breathing Rings --- */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-24 h-24 border border-green-800/30 rounded-full"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute w-16 h-16 border border-green-900/20 rounded-full"
        />

        {/* --- Center Rotating Petal --- */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative z-10 text-green-900/40"
        >
          <Leaf size={32} strokeWidth={1.5} />
        </motion.div>

        {/* --- Inner Spinning Aura --- */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-10 h-10 border-t-2 border-green-900 rounded-full"
        />
      </div>

      {/* --- Minimalist Loading Text --- */}
      <div className="text-center space-y-2">
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] font-black uppercase tracking-[0.5em] text-green-900/60"
        >
          Aligning Rituals
        </motion.p>
        <p className="text-xs font-serif italic text-gray-400">Please take a deep breath...</p>
      </div>
    </div>
  );
};

export default Loader;