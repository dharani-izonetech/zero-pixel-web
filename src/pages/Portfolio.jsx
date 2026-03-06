import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';

const Portfolio = () => {
    // Generate placeholder specific items
    const portfolioItems = useMemo(() => [
        { id: 1, category: "Baby Shower", src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800", title: "Joyful Moments" },
        { id: 2, category: "Birthday", src: "https://images.unsplash.com/photo-1530103862676-de8892cae1ef?auto=format&fit=crop&q=80&w=800", title: "Celebration Lights" },
        { id: 3, category: "Drone", src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1200", title: "Aerial Landscape" },
        { id: 4, category: "Indoor", src: "https://images.unsplash.com/photo-1506509658097-400d724eb8cc?auto=format&fit=crop&q=80&w=800", title: "Studio Portrait" },
        { id: 5, category: "Outdoor", src: "https://images.unsplash.com/photo-1517457210115-c21124231b14?auto=format&fit=crop&q=80&w=800", title: "Nature's Embrace" },
        { id: 6, category: "Baby Shower", src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800", title: "Waiting for You" },
        { id: 7, category: "Birthday", src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=800", title: "Make a Wish" },
        { id: 8, category: "Drone", src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200", title: "Cityscapes" },
        { id: 9, category: "Indoor", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", title: "Classic Glow" },
        { id: 10, category: "Outdoor", src: "https://images.unsplash.com/photo-1444155106208-a006323ab514?auto=format&fit=crop&q=80&w=800", title: "Golden Hour" },
        { id: 11, category: "Wedding", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", title: "The Vows" },
        { id: 12, category: "Portrait", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800", title: "In Thought" }
    ], []);

    const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredItems = useMemo(() => {
        if (activeCategory === "All") return portfolioItems;
        return portfolioItems.filter(item => item.category === activeCategory);
    }, [activeCategory, portfolioItems]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const navigateLightbox = (direction) => {
        if (direction === 'next') {
            setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
        } else {
            setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    return (
        <main className="min-h-screen bg-obsidian text-ghost pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header Sequence */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-6"
                    >
                        Our <span className="text-amber italic">Portfolio</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-ghost/70 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Explore a curated collection of our finest work, spanning across diverse events and themes. Every image is a testament to our dedication to storytelling and aesthetic excellence.
                    </motion.p>
                </div>

                {/* Filter Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-emerald text-obsidian border-emerald'
                                    : 'bg-transparent text-ghost border-emerald/20 hover:border-amber hover:text-amber'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry/Grid Gallery */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, layout: { duration: 0.5 } }}
                                className={`relative group overflow-hidden bg-forest/20 rounded cursor-pointer ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' :
                                        index % 3 === 0 ? 'row-span-2' : ''
                                    }`}
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                                        <span className="text-emerald text-xs uppercase tracking-[0.2em] mb-2 block">{item.category}</span>
                                        <h3 className="text-2xl font-serif text-ghost tracking-wide">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Lightbox
                isOpen={lightboxOpen}
                items={filteredItems}
                currentIndex={currentImageIndex}
                onClose={() => setLightboxOpen(false)}
                onNavigate={navigateLightbox}
            />
        </main>
    );
};

export default Portfolio;
