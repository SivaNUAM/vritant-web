import { Leaf } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-32 space-y-8">
      <div className="relative flex items-center justify-center">
        
        {/* Outer Rings (Static) */}
        <div className="absolute w-24 h-24 border border-green-800/30 rounded-full" />
        <div className="absolute w-16 h-16 border border-green-900/20 rounded-full" />

        {/* Center Icon */}
        <div className="relative z-10 text-green-900/40">
          <Leaf size={32} strokeWidth={1.5} />
        </div>

        {/* Inner Ring */}
        <div className="absolute w-10 h-10 border-t-2 border-green-900 rounded-full" />
      </div>

      {/* Text */}
      <div className="text-center space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-green-900/60">
          Vritant Loading...
        </p>
        <p className="text-xs font-serif italic text-gray-400">
          Please take a deep breath...
        </p>
      </div>
    </div>
  );
};

export default Loader;
