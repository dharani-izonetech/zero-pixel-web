import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';

// Image Imports
import image1 from '../assets/images/2026-website-photos/babyshower/DSC09486 copy.jpg';
import image2 from '../assets/images/2026-website-photos/birthday/004.jpg';
import image3 from '../assets/images/2026-website-photos/Drone/003 copy.jpg';
import image4 from '../assets/images/2026-website-photos/indoor/002.jpg';
import image5 from '../assets/images/2026-website-photos/outdoor/001 copy.jpg';
import image6 from '../assets/images/2026-website-photos/babyshower/DSC09434 copy.jpg';
import image7 from '../assets/images/2026-website-photos/birthday/03.jpg';
import image8 from '../assets/images/2026-website-photos/Drone/003 copy.jpg';
import image9 from '../assets/images/2026-website-photos/indoor/003.jpg';
import image10 from '../assets/images/2026-website-photos/outdoor/1 (1) copy.jpg';
import image11 from '../assets/images/2026-website-photos/001.jpg';
import image12 from '../assets/images/2026-website-photos/babyshower/DSC09457 copy.jpg';
import image13 from '../assets/images/2026-website-photos/babyshower/DSC09469 copy.jpg';
import image14 from '../assets/images/2026-website-photos/birthday/01.jpg';
import image15 from '../assets/images/2026-website-photos/birthday/02.jpg';
import image16 from '../assets/images/2026-website-photos/birthday/003.jpg';
import image17 from '../assets/images/2026-website-photos/birthday/008.jpg';
import image18 from '../assets/images/2026-website-photos/indoor/001.jpg';
import image19 from '../assets/images/2026-website-photos/outdoor/1 (2) copy.jpg';
import image20 from '../assets/images/2026-website-photos/outdoor/1 (3).jpg';
import image21 from '../assets/images/2026-website-photos/outdoor/1 (4) copy.jpg';
import image22 from '../assets/images/2026-website-photos/outdoor/1 (5) copy.jpg';
import image23 from '../assets/images/2026-website-photos/outdoor/8V3A0182 copy.jpg';
import image24 from '../assets/images/2026-website-photos/outdoor/8V3A0252 copy.jpg';
import image25 from '../assets/images/2026-website-photos/outdoor/8V3A0306-1 copy.jpg';
import image26 from '../assets/images/2026-website-photos/outdoor/8V3A0319 copy.jpg';
import image27 from '../assets/images/2026-website-photos/outdoor/8V3A0477 copy.jpg';
import image28 from '../assets/images/2026-website-photos/outdoor/8V3A0556-1 copy.jpg';
import image29 from '../assets/images/2026-website-photos/outdoor/8V3A0728 copy.jpg';
import image30 from '../assets/images/2026-website-photos/outdoor/8V3A0824 copy.jpg';
import image31 from '../assets/images/2026-website-photos/outdoor/8V3A0924 copy.jpg';
import image32 from '../assets/images/2026-website-photos/outdoor/8V3A1090-1 copy.jpg';
import image33 from '../assets/images/2026-website-photos/outdoor/8V3A1173-1 copy.jpg';
import image34 from '../assets/images/2026-website-photos/outdoor/8V3A1232 copy.jpg';
import image35 from '../assets/images/2026-website-photos/outdoor/8V3A1277 copy.jpg';
import image36 from '../assets/images/2026-website-photos/outdoor/8V3A1381-1 copy.jpg';
import image37 from '../assets/images/2026-website-photos/outdoor/8V3A1399-1 copy.jpg';
import image38 from '../assets/images/2026-website-photos/outdoor/8V3A1411 copy.jpg';
import image39 from '../assets/images/2026-website-photos/outdoor/8V3A1472-1 copy.jpg';
import image40 from '../assets/images/2026-website-photos/outdoor/8V3A1484-1 copy.jpg';
import image41 from '../assets/images/2026-website-photos/outdoor/8V3A1586 copy.jpg';
import image42 from '../assets/images/2026-website-photos/outdoor/8V3A1591 copy.jpg';
import image43 from '../assets/images/2026-website-photos/outdoor/8V3A7236 copy.jpg';
import image44 from '../assets/images/2026-website-photos/outdoor/8V3A7515 copy.jpg';
import image45 from '../assets/images/2026-website-photos/outdoor/8V3A7752 copy.jpg';
import image46 from '../assets/images/2026-website-photos/outdoor/8V3A7802 copy.jpg';
import image47 from '../assets/images/2026-website-photos/outdoor/8V3A7832 copy.jpg';
import image48 from '../assets/images/2026-website-photos/outdoor/8V3A7863 copy.jpg';
import image49 from '../assets/images/2026-website-photos/outdoor/8V3A7998 copy.jpg';
import image50 from '../assets/images/2026-website-photos/1.jpg';
import image51 from '../assets/images/2026-website-photos/1G9A1379.jpg';
import image52 from '../assets/images/2026-website-photos/1G9A1419.jpg';
import image53 from '../assets/images/2026-website-photos/1G9A1499.jpg';
import image54 from '../assets/images/2026-website-photos/1G9A2226.jpg';
import image55 from '../assets/images/2026-website-photos/1G9A6768.jpg';
import image56 from '../assets/images/2026-website-photos/1G9A6905.jpg';
import image57 from '../assets/images/2026-website-photos/1G9A6958.jpg';
import image58 from '../assets/images/2026-website-photos/1G9A7248.jpg';
import image59 from '../assets/images/2026-website-photos/1G9A13709.jpg';
import image60 from '../assets/images/2026-website-photos/1G9A14019.jpg';
import image61 from '../assets/images/2026-website-photos/1G9A14099.jpg';
import image62 from '../assets/images/2026-website-photos/1G9A571301 copy.jpg';
import image63 from '../assets/images/2026-website-photos/1G9A571302 copy.jpg';
import image64 from '../assets/images/2026-website-photos/1G9A5701301.jpg';
import image65 from '../assets/images/2026-website-photos/1G9A5713301 copy.jpg';
import image66 from '../assets/images/2026-website-photos/002.jpg';
import image67 from '../assets/images/2026-website-photos/2.jpg';
import image68 from '../assets/images/2026-website-photos/003 copy.jpg';
import image69 from '../assets/images/2026-website-photos/003.jpg';
import image70 from '../assets/images/2026-website-photos/3.jpg';
import image71 from '../assets/images/2026-website-photos/004.jpg';
import image72 from '../assets/images/2026-website-photos/006.jpg';
import image73 from '../assets/images/2026-website-photos/008.jpg';
import image74 from '../assets/images/2026-website-photos/8K4A8605 copy.jpg';
import image75 from '../assets/images/2026-website-photos/8K4A8611 copy.jpg';
import image76 from '../assets/images/2026-website-photos/8K4A8716 copy.jpg';
import image77 from '../assets/images/2026-website-photos/8K4A8926 copy.jpg';
import image78 from '../assets/images/2026-website-photos/8V3A0284 copy.jpg';
import image79 from '../assets/images/2026-website-photos/8V3A0299 copy.jpg';
import image80 from '../assets/images/2026-website-photos/8V3A0975 copy.jpg';
import image81 from '../assets/images/2026-website-photos/8V3A0979.jpg';
import image82 from '../assets/images/2026-website-photos/8V3A1106 copy.jpg';
import image83 from '../assets/images/2026-website-photos/8V3A9410 copy.jpg';
import image84 from '../assets/images/2026-website-photos/8V3A9494 copy.jpg';
import image85 from '../assets/images/2026-website-photos/8V3A9549 copy.jpg';
import image86 from '../assets/images/2026-website-photos/111 copy.jpg';
import image87 from '../assets/images/2026-website-photos/1378.jpg';
import image88 from '../assets/images/2026-website-photos/aaa.jpg';
import image89 from '../assets/images/2026-website-photos/AJAP2191.jpg';
import image90 from '../assets/images/2026-website-photos/AJAP2260.jpg';
import image91 from '../assets/images/2026-website-photos/AJAP3578.jpg';
import image92 from '../assets/images/2026-website-photos/AJAP3671.jpg';
import image93 from '../assets/images/2026-website-photos/AJAP4082.jpg';
import image94 from '../assets/images/2026-website-photos/AJAP6207 copy.jpg';
import image95 from '../assets/images/2026-website-photos/AJAP6440 copy.jpg';
import image96 from '../assets/images/2026-website-photos/AJAP6580 copy.jpg';
import image97 from '../assets/images/2026-website-photos/AJAP8397.jpg';
import image98 from '../assets/images/2026-website-photos/AJAP8459.jpg';
import image99 from '../assets/images/2026-website-photos/AJAP8594_RNS.jpg';
import image100 from '../assets/images/2026-website-photos/AJAP8607.jpg';
import image101 from '../assets/images/2026-website-photos/AJAP8615_RNS_RNS1.jpg';
import image102 from '../assets/images/2026-website-photos/AJAP8810_RNS.jpg';
import image103 from '../assets/images/2026-website-photos/AJAP9218 copy.jpg';
import image104 from '../assets/images/2026-website-photos/AJAP9463 copy.jpg';
import image105 from '../assets/images/2026-website-photos/AJAP9476 copy 2.jpg';
import image106 from '../assets/images/2026-website-photos/AJAP9512 copy.jpg';
import image107 from '../assets/images/2026-website-photos/GRA00795 copy.jpg';
import image108 from '../assets/images/2026-website-photos/GRA00822 copy.jpg';
import image109 from '../assets/images/2026-website-photos/Groom 02.jpg';
import image110 from '../assets/images/2026-website-photos/Groom 05.jpg';
import image111 from '../assets/images/2026-website-photos/Groom 06 copy.jpg';
import image112 from '../assets/images/2026-website-photos/Pondy outdoor copy01.jpg';
import image113 from '../assets/images/2026-website-photos/Pondy outdoor copy2.jpg';
import image114 from '../assets/images/2026-website-photos/Pondy outdoor copy3.jpg';
import image115 from '../assets/images/2026-website-photos/St01.jpg';
import image116 from '../assets/images/2026-website-photos/ZPS009.jpg';
import image117 from '../assets/images/2026-website-photos/ZPS0010.jpg';
import image118 from '../assets/images/2026-website-photos/ZPS21666 01.jpg';
import image119 from '../assets/images/2026-website-photos/ZPS21698.jpg';
import image120 from '../assets/images/2026-website-photos/ZPS21878.jpg';
import image121 from '../assets/images/2026-website-photos/ZPS22539.jpg';
import image122 from '../assets/images/2026-website-photos/ZPS22559.jpg';
import image123 from '../assets/images/2026-website-photos/ZPS22882.jpg';
import image124 from '../assets/images/2026-website-photos/ZPS22947.jpg';
import image125 from '../assets/images/2026-website-photos/8K4A8926 copy.jpg';
import image126 from '../assets/images/2026-website-photos/St01.jpg';
import image127 from '../assets/images/2026-website-photos/ZPS21698.jpg';
import image128 from '../assets/images/2026-website-photos/indoor/002.jpg';

const Portfolio = () => {
    const portfolioItems = useMemo(() => [
        { id: 1, category: "Baby Shower", src: image1 },
        { id: 2, category: "Birthday", src: image2 },
        { id: 3, category: "Drone", src: image3 },
        { id: 4, category: "Indoor", src: image4 },
        { id: 5, category: "Outdoor", src: image5 },
        { id: 6, category: "Baby Shower", src: image6 },
        { id: 7, category: "Birthday", src: image7 },
        { id: 8, category: "Drone", src: image8 },
        { id: 9, category: "Indoor", src: image9 },
        { id: 10, category: "Outdoor", src: image10 },
        { id: 11, category: "Wedding", src: image11 },
        { id: 12, category: "Baby Shower", src: image12 },
        { id: 13, category: "Baby Shower", src: image13 },
        { id: 14, category: "Birthday", src: image14 },
        { id: 15, category: "Birthday", src: image15 },
        { id: 16, category: "Birthday", src: image16 },
        { id: 17, category: "Birthday", src: image17 },
        { id: 18, category: "Indoor", src: image18 },
        { id: 19, category: "Outdoor", src: image19 },
        { id: 20, category: "Outdoor", src: image20 },
        { id: 21, category: "Outdoor", src: image21 },
        { id: 22, category: "Outdoor", src: image22 },
        { id: 23, category: "Outdoor", src: image23 },
        { id: 24, category: "Outdoor", src: image24 },
        { id: 25, category: "Outdoor", src: image25 },
        { id: 26, category: "Outdoor", src: image26 },
        { id: 27, category: "Outdoor", src: image27 },
        { id: 29, category: "Outdoor", src: image28 },
        { id: 30, category: "Outdoor", src: image29 },
        { id: 31, category: "Outdoor", src: image30 },
        { id: 32, category: "Outdoor", src: image31 },
        { id: 33, category: "Outdoor", src: image32 },
        { id: 34, category: "Outdoor", src: image33 },
        { id: 35, category: "Outdoor", src: image34 },
        { id: 36, category: "Outdoor", src: image35 },
        { id: 37, category: "Outdoor", src: image36 },
        { id: 38, category: "Outdoor", src: image37 },
        { id: 39, category: "Outdoor", src: image38 },
        { id: 40, category: "Outdoor", src: image39 },
        { id: 41, category: "Outdoor", src: image40 },
        { id: 42, category: "Outdoor", src: image41 },
        { id: 43, category: "Outdoor", src: image42 },
        { id: 44, category: "Outdoor", src: image43 },
        { id: 45, category: "Outdoor", src: image44 },
        { id: 46, category: "Outdoor", src: image45 },
        { id: 461, category: "Outdoor", src: image46 },
        { id: 47, category: "Outdoor", src: image47 },
        { id: 48, category: "Outdoor", src: image48 },
        { id: 49, category: "Outdoor", src: image49 },
        { id: 50, category: "Wedding", src: image50 },
        { id: 51, category: "Wedding", src: image51 },
        { id: 52, category: "Wedding", src: image52 },
        { id: 53, category: "Wedding", src: image53 },
        { id: 54, category: "Wedding", src: image54 },
        { id: 55, category: "Wedding", src: image55 },
        { id: 56, category: "Wedding", src: image56 },
        { id: 57, category: "Wedding", src: image57 },
        { id: 58, category: "Wedding", src: image58 },
        { id: 59, category: "Wedding", src: image59 },
        { id: 60, category: "Wedding", src: image60 },
        { id: 61, category: "Wedding", src: image61 },
        { id: 62, category: "Wedding", src: image62 },
        { id: 63, category: "Wedding", src: image63 },
        { id: 64, category: "Wedding", src: image64 },
        { id: 65, category: "Wedding", src: image65 },
        { id: 66, category: "Wedding", src: image66 },
        { id: 67, category: "Wedding", src: image67 },
        { id: 68, category: "Wedding", src: image68 },
        { id: 69, category: "Wedding", src: image69 },
        { id: 70, category: "Wedding", src: image70 },
        { id: 71, category: "Wedding", src: image71 },
        { id: 72, category: "Wedding", src: image72 },
        { id: 73, category: "Wedding", src: image73 },
        { id: 74, category: "Wedding", src: image74 },
        { id: 75, category: "Wedding", src: image75 },
        { id: 76, category: "Wedding", src: image76 },
        { id: 77, category: "Wedding", src: image77 },
        { id: 78, category: "Wedding", src: image78 },
        { id: 79, category: "Wedding", src: image79 },
        { id: 80, category: "Wedding", src: image80 },
        { id: 81, category: "Wedding", src: image81 },
        { id: 82, category: "Wedding", src: image82 },
        { id: 83, category: "Wedding", src: image83 },
        { id: 84, category: "Wedding", src: image84 },
        { id: 85, category: "Wedding", src: image85 },
        { id: 86, category: "Wedding", src: image86 },
        { id: 87, category: "Wedding", src: image87 },
        { id: 88, category: "Wedding", src: image88 },
        { id: 89, category: "Wedding", src: image89 },
        { id: 90, category: "Wedding", src: image90 },
        { id: 91, category: "Wedding", src: image91 },
        { id: 92, category: "Wedding", src: image92 },
        { id: 93, category: "Wedding", src: image93 },
        { id: 94, category: "Wedding", src: image94 },
        { id: 95, category: "Wedding", src: image95 },
        { id: 96, category: "Wedding", src: image96 },
        { id: 97, category: "Wedding", src: image97 },
        { id: 98, category: "Wedding", src: image98 },
        { id: 99, category: "Wedding", src: image99 },
        { id: 100, category: "Wedding", src: image100 },
        { id: 101, category: "Wedding", src: image101 },
        { id: 102, category: "Wedding", src: image102 },
        { id: 103, category: "Wedding", src: image103 },
        { id: 104, category: "Wedding", src: image104 },
        { id: 105, category: "Wedding", src: image105 },
        { id: 106, category: "Wedding", src: image106 },
        { id: 107, category: "Wedding", src: image107 },
        { id: 108, category: "Wedding", src: image108 },
        { id: 109, category: "Wedding", src: image109 },
        { id: 110, category: "Wedding", src: image110 },
        { id: 111, category: "Wedding", src: image111 },
        { id: 112, category: "Wedding", src: image112 },
        { id: 113, category: "Wedding", src: image113 },
        { id: 114, category: "Wedding", src: image114 },
        { id: 115, category: "Wedding", src: image115 },
        { id: 116, category: "Wedding", src: image116 },
        { id: 117, category: "Wedding", src: image117 },
        { id: 118, category: "Wedding", src: image118 },
        { id: 119, category: "Wedding", src: image119 },
        { id: 120, category: "Wedding", src: image120 },
        { id: 121, category: "Wedding", src: image121 },
        { id: 122, category: "Wedding", src: image122 },
        { id: 123, category: "Wedding", src: image123 },
        { id: 124, category: "Wedding", src: image124 },
        { id: 125, category: "Corporate Events", src: image125 },
        { id: 126, category: "Corporate Events", src: image126 },
        { id: 127, category: "Promotion", src: image127 },
        { id: 129, category: "Indoor", src: image128 }
    ]);

    const categories = ["All", "Wedding", "Corporate Events", "Promotion", "Baby Shower", "Indoor", "Outdoor", "Drone"];
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
                            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${activeCategory === category
                                ? 'bg-emerald text-obsidian border-emerald'
                                : 'bg-transparent text-ghost border-emerald/20 hover:border-amber hover:text-amber'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

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