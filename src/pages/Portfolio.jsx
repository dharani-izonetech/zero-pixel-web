import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';

const Portfolio = () => {
    const portfolioItems = useMemo(() => [
        { id: 1, category: "Baby Shower", src: "/src/assets/images/2026 website photos/babyshower/DSC09486 copy.jpg" },
        { id: 2, category: "Birthday", src: "/src/assets/images/2026 website photos/birthday/004.jpg" },
        { id: 3, category: "Drone", src: "/src/assets/images/2026 website photos/Drone/003 copy.jpg" },
        { id: 4, category: "Indoor", src: "/src/assets/images/2026 website photos/indoor/002.jpg" },
        { id: 5, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/001 copy.jpg" },
        { id: 6, category: "Baby Shower", src: "/src/assets/images/2026 website photos/babyshower/DSC09434 copy.jpg" },
        { id: 7, category: "Birthday", src: "/src/assets/images/2026 website photos/birthday/03.jpg" },
        { id: 8, category: "Drone", src: "/src/assets/images/2026 website photos/Drone/003 copy.jpg" },
        { id: 9, category: "Indoor", src: "/src/assets/images/2026 website photos/indoor/003.jpg" },
        { id: 10, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/1 (1) copy.jpg" },
        { id: 11, category: "Wedding", src: "/src/assets/images/2026 website photos/001.jpg" },
        { id: 12, category: "Baby Shower", src: "/src/assets/images/2026 website photos/babyshower/DSC09457 copy.jpg" },
        { id: 13, category: "Baby Shower", src: "/src/assets/images/2026 website photos/babyshower/DSC09469 copy.jpg" },
        { id: 14, category: "Birthday", src: "/src/assets/images/2026 website photos/birthday/01.jpg" },
        { id: 15, category: "Birthday", src: "/src/assets/images/2026 website photos/birthday/02.jpg" },
        { id: 16, category: "Birthday", src: "/src/assets/images/2026 website photos/birthday/003.jpg" },
        { id: 17, category: "Birthday", src: "/src/assets/images/2026 website photos/birthday/008.jpg" },
        { id: 18, category: "Indoor", src: "/src/assets/images/2026 website photos/indoor/001.jpg" },
        { id: 19, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/1 (2) copy.jpg" },
        { id: 20, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/1 (3).jpg" },
        { id: 21, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/1 (4) copy.jpg" },
        { id: 22, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/1 (5) copy.jpg" },
        { id: 23, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0182 copy.jpg" },
        { id: 24, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0252 copy.jpg" },
        { id: 25, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0306-1 copy.jpg" },
        { id: 26, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0319 copy.jpg" },
        { id: 27, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0477 copy.jpg" },
        { id: 29, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0556-1 copy.jpg" },
        { id: 30, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0728 copy.jpg" },
        { id: 31, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0824 copy.jpg" },
        { id: 32, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A0924 copy.jpg" },
        { id: 33, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1090-1 copy.jpg" },
        { id: 34, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1173-1 copy.jpg" },
        { id: 35, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1232 copy.jpg" },
        { id: 36, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1277 copy.jpg" },
        { id: 37, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1381-1 copy.jpg" },
        { id: 38, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1399-1 copy.jpg" },
        { id: 39, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1411 copy.jpg" },
        { id: 40, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1472-1 copy.jpg" },
        { id: 41, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1484-1 copy.jpg" },
        { id: 42, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1586 copy.jpg" },
        { id: 43, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A1591 copy.jpg" },
        { id: 44, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7236 copy.jpg" },
        { id: 45, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7515 copy.jpg" },
        { id: 46, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7752 copy.jpg" },
        { id: 461, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7802 copy.jpg" },
        { id: 47, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7832 copy.jpg" },
        { id: 48, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7863 copy.jpg" },
        { id: 49, category: "Outdoor", src: "/src/assets/images/2026 website photos/outdoor/8V3A7998 copy.jpg" },
        { id: 50, category: "Wedding", src: "/src/assets/images/2026 website photos/1.jpg" },
        { id: 51, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A1379.jpg" },
        { id: 52, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A1419.jpg" },
        { id: 53, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A1499.jpg" },
        { id: 54, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A2226.jpg" },
        { id: 55, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A6768.jpg" },
        { id: 56, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A6905.jpg" },
        { id: 57, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A6958.jpg" },
        { id: 58, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A7248.jpg" },
        { id: 59, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A13709.jpg" },
        { id: 60, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A14019.jpg" },
        { id: 61, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A14099.jpg" },
        { id: 62, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A571301 copy.jpg" },
        { id: 63, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A571302 copy.jpg" },
        { id: 64, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A5701301.jpg" },
        { id: 65, category: "Wedding", src: "/src/assets/images/2026 website photos/1G9A5713301 copy.jpg" },
        { id: 66, category: "Wedding", src: "/src/assets/images/2026 website photos/002.jpg" },
        { id: 67, category: "Wedding", src: "/src/assets/images/2026 website photos/2.jpg" },
        { id: 68, category: "Wedding", src: "/src/assets/images/2026 website photos/003 copy.jpg" },
        { id: 69, category: "Wedding", src: "/src/assets/images/2026 website photos/003.jpg" },
        { id: 70, category: "Wedding", src: "/src/assets/images/2026 website photos/3.jpg" },
        { id: 71, category: "Wedding", src: "/src/assets/images/2026 website photos/004.jpg" },
        { id: 72, category: "Wedding", src: "/src/assets/images/2026 website photos/006.jpg" },
        { id: 73, category: "Wedding", src: "/src/assets/images/2026 website photos/008.jpg" },
        { id: 74, category: "Wedding", src: "/src/assets/images/2026 website photos/8K4A8605 copy.jpg" },
        { id: 75, category: "Wedding", src: "/src/assets/images/2026 website photos/8K4A8611 copy.jpg" },
        { id: 76, category: "Wedding", src: "/src/assets/images/2026 website photos/8K4A8716 copy.jpg" },
        { id: 77, category: "Wedding", src: "/src/assets/images/2026 website photos/8K4A8926 copy.jpg" },
        { id: 78, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A0284 copy.jpg" },
        { id: 79, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A0299 copy.jpg" },
        { id: 80, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A0975 copy.jpg" },
        { id: 81, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A0979.jpg" },
        { id: 82, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A1106 copy.jpg" },
        { id: 83, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A9410 copy.jpg" },
        { id: 84, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A9494 copy.jpg" },
        { id: 85, category: "Wedding", src: "/src/assets/images/2026 website photos/8V3A9549 copy.jpg" },
        { id: 86, category: "Wedding", src: "/src/assets/images/2026 website photos/111 copy.jpg" },
        { id: 87, category: "Wedding", src: "/src/assets/images/2026 website photos/1378.jpg" },
        { id: 88, category: "Wedding", src: "/src/assets/images/2026 website photos/aaa.jpg" },
        { id: 89, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP2191.jpg" },
        { id: 90, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP2260.jpg" },
        { id: 91, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP3578.jpg" },
        { id: 92, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP3671.jpg" },
        { id: 93, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP4082.jpg" },
        { id: 94, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP6207 copy.jpg" },
        { id: 95, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP6440 copy.jpg" },
        { id: 96, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP6580 copy.jpg" },
        { id: 97, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP8397.jpg" },
        { id: 98, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP8459.jpg" },
        { id: 99, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP8594_RNS.jpg" },
        { id: 100, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP8607.jpg" },
        { id: 101, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP8615_RNS_RNS1.jpg" },
        { id: 102, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP8810_RNS.jpg" },
        { id: 103, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP9218 copy.jpg" },
        { id: 104, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP9463 copy.jpg" },
        { id: 105, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP9476 copy 2.jpg" },
        { id: 106, category: "Wedding", src: "/src/assets/images/2026 website photos/AJAP9512 copy.jpg" },
        { id: 107, category: "Wedding", src: "/src/assets/images/2026 website photos/GRA00795 copy.jpg" },
        { id: 108, category: "Wedding", src: "/src/assets/images/2026 website photos/GRA00822 copy.jpg" },
        { id: 109, category: "Wedding", src: "/src/assets/images/2026 website photos/Groom 02 copy.jpg" },
        { id: 110, category: "Wedding", src: "/src/assets/images/2026 website photos/Groom 05.jpg" },
        { id: 111, category: "Wedding", src: "/src/assets/images/2026 website photos/Groom 06 copy.jpg" },
        { id: 112, category: "Wedding", src: "/src/assets/images/2026 website photos/Pondy outdoor copy01.jpg" },
        { id: 113, category: "Wedding", src: "/src/assets/images/2026 website photos/Pondy outdoor copy2.jpg" },
        { id: 114, category: "Wedding", src: "/src/assets/images/2026 website photos/Pondy outdoor copy3.jpg" },
        { id: 115, category: "Wedding", src: "/src/assets/images/2026 website photos/St01.jpg" },
        { id: 116, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS009.jpg" },
        { id: 117, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS0010.jpg" },
        { id: 118, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS21666 01.jpg" },
        { id: 119, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS21698.jpg" },
        { id: 120, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS21878.jpg" },
        { id: 121, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS22539.jpg" },
        { id: 122, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS22559.jpg" },
        { id: 123, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS22882.jpg" },
        { id: 124, category: "Wedding", src: "/src/assets/images/2026 website photos/ZPS22947.jpg" },
        { id: 125, category: "Portrait", src: "/src/assets/images/2026 website photos/Pondy outdoor copy01.jpg" }
    ]);

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

                {/* Header */}
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
                        Explore a curated collection of our finest work, spanning across diverse events and themes.
                        Every image is a testament to our dedication to storytelling and aesthetic excellence.
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
                            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                                activeCategory === category
                                    ? 'bg-emerald text-obsidian border-emerald'
                                    : 'bg-transparent text-ghost border-emerald/20 hover:border-amber hover:text-amber'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/*
                    ✅ MASONRY COLUMNS LAYOUT
                    - No fixed row height → no black bars
                    - Each image shows at its natural aspect ratio
                    - 3 columns on desktop, 2 on tablet, 1 on mobile
                    - break-inside-avoid prevents cards from splitting across columns
                */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.02 }}
                                className="relative group overflow-hidden rounded mb-6 break-inside-avoid cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                {/* Full image — natural size, zero cropping, zero black bars */}
                                <img
                                    src={item.src}
                                    alt={item.category}
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-obsidian/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">
                                        <span className="text-emerald text-xs uppercase tracking-[0.2em] mb-2 block">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-serif text-ghost tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

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