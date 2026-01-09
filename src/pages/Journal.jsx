import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Search,
  Filter,
  Sparkles,
  ArrowRight
} from "lucide-react";

const Journal = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Rituals", "Ingredients", "Wisdom", "Lifestyle"];

  const articles = [
    {
      id: 1,
      category: "Rituals",
      title: "The Moonlight Abhyanga: A Guide to Self-Massage",
      excerpt: "Discover the ancient practice of oil massage and how it aligns with lunar cycles for deep lymphatic drainage.",
      author: "Dr. Amara Varma",
      date: "Jan 12, 2026",
      readTime: "8 min read",
      // REPLACED: New high-quality atmospheric botanical image
      image: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=1200",
      featured: true
    },
    {
      id: 2,
      category: "Ingredients",
      title: "Saffron: The Red Gold of Kashmir",
      excerpt: "Why this hand-picked spice is the most expensive and potent skin-brightening agent in the world.",
      author: "Rohan Mehta",
      date: "Jan 08, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 3,
      category: "Wisdom",
      title: "Understanding Your Dosha: Vata, Pitta, Kapha",
      excerpt: "Take our deep dive into the three biological energies that govern your physical and mental processes.",
      author: "Ananya Iyer",
      date: "Dec 28, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 4,
      category: "Lifestyle",
      title: "5 Morning Teas to Balance Your Gut",
      excerpt: "Swap your caffeine for these herbal infusions designed to kindle your digestive fire (Agni).",
      author: "Dr. Amara Varma",
      date: "Dec 20, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
        id: 5,
        category: "Rituals",
        title: "The Art of Mindful Bathing",
        excerpt: "Transform your daily shower into a high-vibrational sanctuary with Himalayan salts and dried neem.",
        author: "Sarah Jenkins",
        date: "Dec 15, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800",
        featured: false
    },
    {
        id: 6,
        category: "Ingredients",
        title: "Brahmi: The Brain Tonic",
        excerpt: "Exploring the cognitive benefits of the small-leafed herb known for enhancing memory and focus.",
        author: "Dr. Amara Varma",
        date: "Dec 05, 2025",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
        featured: false
    }
  ];

  const filteredArticles = articles.filter(a => activeFilter === "All" || a.category === activeFilter);

  return (
    <div className="bg-[#FDFCF8] min-h-screen pb-32">
      
      {/* --- SECTION 1: EDITORIAL HEADER --- */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-green-800/60 font-black text-[10px] uppercase tracking-[0.5em] mb-6"
            >
              <BookOpen size={14} />
              The Wellness Archive
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-[#1A2E1A]"
            >
              The <span className="italic font-light text-green-900/40">Journal</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 font-serif italic text-xl max-w-xs md:text-right"
          >
            Insights into the ancient soul and modern biology.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative pb-2 ${
                  activeFilter === cat ? "text-green-900" : "text-gray-300 hover:text-gray-500"
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div layoutId="journalLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-900" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="relative group">
                <Search size={20} className="cursor-pointer hover:text-green-900 transition-colors" />
            </div>
            <div className="h-6 w-[1px] bg-gray-200" />
            <Filter size={20} className="cursor-pointer hover:text-green-900 transition-colors" />
          </div>
        </div>
      </header>

      {/* --- SECTION 2: FEATURED STORY --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {articles.filter(a => a.featured).map(featured => (
          <motion.div 
            key={featured.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center cursor-pointer"
          >
            <div className="lg:col-span-8 overflow-hidden rounded-[3.5rem] bg-gray-100 aspect-[16/9] shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src={featured.image} 
                className="w-full h-full object-cover" 
                alt="Featured Article"
              />
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-green-700" />
                <span className="text-green-900 text-[10px] font-black uppercase tracking-widest">Featured Editorial</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight group-hover:text-green-800 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="text-[10px] font-black uppercase tracking-widest">
                  By {featured.author} <span className="mx-2 text-gray-200">/</span> {featured.readTime}
                </div>
              </div>
              <button className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
                Read Full Story <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- SECTION 3: GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredArticles.filter(a => !a.featured).map((article) => (
              <motion.article 
                layout
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col h-full cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-8 transition-transform duration-500 group-hover:-translate-y-2 shadow-sm hover:shadow-2xl">
                  <img 
                    src={article.image} 
                    className="w-full h-full object-cover" 
                    alt="Article Post"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                        {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 px-2">
                  <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    <span className="flex items-center gap-1 text-green-800"><Clock size={12}/> {article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif leading-snug group-hover:text-green-800 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between px-2">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Continue Reading</span>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-green-900 group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- SECTION 4: NEWSLETTER --- */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-[#1A2E1A] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative z-10 max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Rituals, delivered to <br/> <span className="italic font-light text-green-300">your sanctuary.</span></h2>
            <p className="text-green-200/50 mb-12 text-sm max-w-sm mx-auto font-light leading-relaxed">Join 25,000+ souls receiving our weekly botanical deep-dives and ancient wellness manuscripts.</p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-green-400 transition-colors placeholder:text-green-900/30 text-sm font-medium"
              />
              <button className="bg-white text-green-900 px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-green-100 hover:scale-105 transition-all active:scale-95 shadow-xl">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Journal;