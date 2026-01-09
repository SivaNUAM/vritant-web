import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShoppingBag, Leaf, Sparkles, ShieldCheck, ArrowLeft, Droplets, Wind, Star, CheckCircle2, FlaskConical, Globe } from "lucide-react";
import { products } from "../../data/products";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/helpers";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const liveImages = [
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1564277287253-934c868e54ea?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800"
  ];

  const product = products.find((item) => item.id === Number(id));
  const [mainImage, setMainImage] = useState(product?.image || liveImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("benefits");

  useEffect(() => {
    if (product) setMainImage(product.image || liveImages[0]);
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) return null;

  const features = [
    { icon: <ShieldCheck size={18} />, title: "Certified Purity", desc: "100% Organic & Lab Tested" },
    { icon: <Droplets size={18} />, title: "Cold Extraction", desc: "Preserving Vital Nutrients" },
    { icon: <Globe size={18} />, title: "Ethical Source", desc: "Directly from Himalayan Farms" },
    { icon: <FlaskConical size={18} />, title: "No Synthetics", desc: "Free from Parabens & Fragrance" }
  ];

  return (
    <div className="bg-[#FDFCF8] min-h-screen pb-20 selection:bg-green-100">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-green-900 transition-all mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          The Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: COMPACT GALLERY (5/12 Cols) --- */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-green-900/5 aspect-[4/5] relative border border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={mainImage}
                  onError={(e) => { e.target.onerror = null; setMainImage(liveImages[0]); }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-green-900 shadow-sm flex items-center gap-2">
                  <Sparkles size={12} className="text-green-700" /> Artisan Grade
                </div>
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 px-2">
              {[product.image, ...liveImages.slice(0, 4)].filter(Boolean).map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`relative w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    mainImage === img ? "border-green-800 scale-105" : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: EXTENDED CONTENT (7/12 Cols) --- */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="max-w-2xl space-y-10">
              
              {/* HEADER */}
              <header className="space-y-4">
                <div className="flex items-center gap-2 text-green-700/60 font-black text-[10px] uppercase tracking-[0.4em]">
                  <Leaf size={14} /> Ancient Ayurvedic Formula
                </div>
                <h1 className="text-5xl lg:text-7xl font-serif text-[#1A2E1A] leading-[1.1] tracking-tight">
                  {product.name}
                </h1>
                <div className="flex items-center gap-6">
                  <p className="text-3xl font-serif italic text-green-800">{formatPrice(product.price)}</p>
                  <div className="h-4 w-[1px] bg-gray-200" />
                  <div className="flex items-center gap-1 text-orange-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">4.9 (128 Rituals)</span>
                  </div>
                </div>
              </header>

              <p className="text-gray-500 leading-relaxed text-lg font-light border-l-2 border-green-50 pl-6 italic">
                {product.description}
              </p>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm">
                    <div className="text-green-700 mt-1">{f.icon}</div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-green-950">{f.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TABS (BENEFITS/INGREDIENTS) */}
              <div className="space-y-6 pt-6">
                <div className="flex gap-10 border-b border-gray-100">
                  {["benefits", "ingredients"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] relative transition-all ${
                        activeTab === tab ? "text-green-950" : "text-gray-300 hover:text-gray-500"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="min-h-[100px]">
                  <AnimatePresence mode="wait">
                    {activeTab === "benefits" ? (
                      <motion.div 
                        key="ben" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                        className="grid grid-cols-1 gap-3"
                      >
                        {product.benefits?.map((b, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                            <CheckCircle2 size={16} className="text-green-200" /> {b}
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div key="ing" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                        <p className="text-sm text-gray-400 leading-relaxed tracking-wide uppercase italic">
                          {product.ingredients?.join(" • ")}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* ACTION BUTTONS */}
           <div className="pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">

  {/* Quantity Selector */}
  <div className="flex justify-center sm:justify-start">
    <div className="flex items-center bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm">
      <button
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
        className="p-3 sm:p-4 hover:text-green-800 active:scale-95 transition"
      >
        <Minus size={16} />
      </button>

      <span className="w-10 sm:w-12 text-center font-serif font-bold text-lg sm:text-xl">
        {quantity}
      </span>

      <button
        onClick={() => setQuantity(q => q + 1)}
        className="p-3 sm:p-4 hover:text-green-800 active:scale-95 transition"
      >
        <Plus size={16} />
      </button>
    </div>
  </div>

  {/* Add to Cart Button */}
        <button
          onClick={() => addToCart({ ...product, quantity })}
          className="w-full sm:w-auto bg-[#1A2E1A] text-white py-4 sm:py-5 px-8 rounded-xl sm:rounded-2xl
          font-black uppercase text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.5em]
          flex items-center justify-center gap-4
           hover:bg-green-900 transition-all hover:shadow-2xl hover:shadow-green-900/20
           active:scale-95"
        >
          Begin Ritual <ShoppingBag size={16} />
        </button>

      </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;