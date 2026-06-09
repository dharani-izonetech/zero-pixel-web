import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Lightbox from '../components/Lightbox';
import logo from '../assets/images/2026-website-photos/zero-pixel-icon.jpg';

// ─── Image Imports ────────────────────────────────────────────────────────────
import image1   from '../assets/images/2026-website-photos/babyshower/DSC09486 copy.jpg';
import image2   from '../assets/images/2026-website-photos/birthday/004.jpg';
import image3   from '../assets/images/2026-website-photos/Drone/003 copy.jpg';
import image4   from '../assets/images/2026-website-photos/indoor/002.jpg';
import image5   from '../assets/images/2026-website-photos/outdoor/001 copy.jpg';
import image6   from '../assets/images/2026-website-photos/babyshower/DSC09434 copy.jpg';
import image7   from '../assets/images/2026-website-photos/birthday/03.jpg';
import image8   from '../assets/images/2026-website-photos/Drone/003 copy.jpg';
import image9   from '../assets/images/2026-website-photos/indoor/003.jpg';
import image10  from '../assets/images/2026-website-photos/outdoor/1 (1) copy.jpg';
import image11  from '../assets/images/2026-website-photos/001.jpg';
import image12  from '../assets/images/2026-website-photos/babyshower/DSC09457 copy.jpg';
import image13  from '../assets/images/2026-website-photos/babyshower/DSC09469 copy.jpg';
import image14  from '../assets/images/2026-website-photos/birthday/01.jpg';
import image15  from '../assets/images/2026-website-photos/birthday/02.jpg';
import image16  from '../assets/images/2026-website-photos/birthday/003.jpg';
import image17  from '../assets/images/2026-website-photos/birthday/008.jpg';
import image18  from '../assets/images/2026-website-photos/indoor/001.jpg';
import image20  from '../assets/images/2026-website-photos/indoor/indoor2.jpeg';
import image22  from '../assets/images/2026-website-photos/indoor/indoor4.jpeg';
import image23  from '../assets/images/2026-website-photos/indoor/indoor5.jpeg';
import image24  from '../assets/images/2026-website-photos/indoor/indoor6.jpeg';
import image25  from '../assets/images/2026-website-photos/indoor/indoor7.jpeg';
import image26  from '../assets/images/2026-website-photos/indoor/indoor8.jpeg';
import image27  from '../assets/images/2026-website-photos/indoor/indoor9.jpeg';
import image28  from '../assets/images/2026-website-photos/indoor/indoor10.jpeg';
import image29  from '../assets/images/2026-website-photos/outdoor/1 (2) copy.jpg';
import image30  from '../assets/images/2026-website-photos/outdoor/1 (3).jpg';
import image31  from '../assets/images/2026-website-photos/outdoor/1 (4) copy.jpg';
import image32  from '../assets/images/2026-website-photos/outdoor/1 (5) copy.jpg';
import image33  from '../assets/images/2026-website-photos/outdoor/8V3A0182 copy.jpg';
import image34  from '../assets/images/2026-website-photos/outdoor/8V3A0252 copy.jpg';
import image35  from '../assets/images/2026-website-photos/outdoor/8V3A0306-1 copy.jpg';
import image36  from '../assets/images/2026-website-photos/outdoor/8V3A0319 copy.jpg';
import image37  from '../assets/images/2026-website-photos/outdoor/8V3A0477 copy.jpg';
import image38  from '../assets/images/2026-website-photos/outdoor/8V3A0556-1 copy.jpg';
import image39  from '../assets/images/2026-website-photos/outdoor/8V3A0728 copy.jpg';
import image40  from '../assets/images/2026-website-photos/outdoor/8V3A0824 copy.jpg';
import image41  from '../assets/images/2026-website-photos/outdoor/8V3A0924 copy.jpg';
import image42  from '../assets/images/2026-website-photos/outdoor/8V3A1090-1 copy.jpg';
import image43  from '../assets/images/2026-website-photos/outdoor/8V3A1173-1 copy.jpg';
import image44  from '../assets/images/2026-website-photos/outdoor/8V3A1232 copy.jpg';
import image45  from '../assets/images/2026-website-photos/outdoor/8V3A1277 copy.jpg';
import image46  from '../assets/images/2026-website-photos/outdoor/8V3A1381-1 copy.jpg';
import image47  from '../assets/images/2026-website-photos/outdoor/8V3A1399-1 copy.jpg';
import image48  from '../assets/images/2026-website-photos/outdoor/8V3A1411 copy.jpg';
import image49  from '../assets/images/2026-website-photos/outdoor/8V3A1472-1 copy.jpg';
import image50  from '../assets/images/2026-website-photos/outdoor/8V3A1484-1 copy.jpg';
import image51  from '../assets/images/2026-website-photos/outdoor/8V3A1586 copy.jpg';
import image52  from '../assets/images/2026-website-photos/outdoor/8V3A1591 copy.jpg';
import image53  from '../assets/images/2026-website-photos/outdoor/8V3A7236 copy.jpg';
import image54  from '../assets/images/2026-website-photos/outdoor/8V3A7515 copy.jpg';
import image55  from '../assets/images/2026-website-photos/outdoor/8V3A7752 copy.jpg';
import image56  from '../assets/images/2026-website-photos/outdoor/8V3A7802 copy.jpg';
import image57  from '../assets/images/2026-website-photos/outdoor/8V3A7832 copy.jpg';
import image58  from '../assets/images/2026-website-photos/outdoor/8V3A7863 copy.jpg';
import image59  from '../assets/images/2026-website-photos/outdoor/8V3A7998 copy.jpg';
import image60  from '../assets/images/2026-website-photos/outdoor/outdoor1.jpeg';
import image61  from '../assets/images/2026-website-photos/outdoor/outdoor2.jpeg';
import image62  from '../assets/images/2026-website-photos/outdoor/outdoor3.jpeg';
import image63  from '../assets/images/2026-website-photos/outdoor/outdoor4.jpeg';
import image64  from '../assets/images/2026-website-photos/1.jpg';
import image65  from '../assets/images/2026-website-photos/1G9A1379.jpg';
import image66  from '../assets/images/2026-website-photos/1G9A1419.jpg';
import image67  from '../assets/images/2026-website-photos/1G9A1499.jpg';
import image68  from '../assets/images/2026-website-photos/1G9A2226.jpg';
import image69  from '../assets/images/2026-website-photos/1G9A6768.jpg';
import image70  from '../assets/images/2026-website-photos/1G9A6905.jpg';
import image71  from '../assets/images/2026-website-photos/1G9A6958.jpg';
import image72  from '../assets/images/2026-website-photos/1G9A7248.jpg';
import image73  from '../assets/images/2026-website-photos/1G9A13709.jpg';
import image74  from '../assets/images/2026-website-photos/1G9A14019.jpg';
import image75  from '../assets/images/2026-website-photos/1G9A14099.jpg';
import image76  from '../assets/images/2026-website-photos/1G9A571301 copy.jpg';
import image77  from '../assets/images/2026-website-photos/1G9A571302 copy.jpg';
import image78  from '../assets/images/2026-website-photos/1G9A5701301.jpg';
import image79  from '../assets/images/2026-website-photos/1G9A5713301 copy.jpg';
import image80  from '../assets/images/2026-website-photos/002.jpg';
import image81  from '../assets/images/2026-website-photos/2.jpg';
import image82  from '../assets/images/2026-website-photos/003 copy.jpg';
import image83  from '../assets/images/2026-website-photos/003.jpg';
import image84  from '../assets/images/2026-website-photos/3.jpg';
import image85  from '../assets/images/2026-website-photos/004.jpg';
import image86  from '../assets/images/2026-website-photos/006.jpg';
import image87  from '../assets/images/2026-website-photos/008.jpg';
import image88  from '../assets/images/2026-website-photos/8K4A8605 copy.jpg';
import image89  from '../assets/images/2026-website-photos/8K4A8611 copy.jpg';
import image90  from '../assets/images/2026-website-photos/8K4A8716 copy.jpg';
import image91  from '../assets/images/2026-website-photos/8K4A8926 copy.jpg';
import image92  from '../assets/images/2026-website-photos/8V3A0284 copy.jpg';
import image93  from '../assets/images/2026-website-photos/8V3A0299 copy.jpg';
import image94  from '../assets/images/2026-website-photos/8V3A0975 copy.jpg';
import image95  from '../assets/images/2026-website-photos/8V3A0979.jpg';
import image96  from '../assets/images/2026-website-photos/8V3A1106 copy.jpg';
import image97  from '../assets/images/2026-website-photos/8V3A9410 copy.jpg';
import image98  from '../assets/images/2026-website-photos/8V3A9494 copy.jpg';
import image99  from '../assets/images/2026-website-photos/8V3A9549 copy.jpg';
import image100 from '../assets/images/2026-website-photos/111 copy.jpg';
import image101 from '../assets/images/2026-website-photos/1378.jpg';
import image102 from '../assets/images/2026-website-photos/aaa.jpg';
import image103 from '../assets/images/2026-website-photos/AJAP2191.jpg';
import image104 from '../assets/images/2026-website-photos/AJAP2260.jpg';
import image105 from '../assets/images/2026-website-photos/AJAP3578.jpg';
import image106 from '../assets/images/2026-website-photos/AJAP3671.jpg';
import image107 from '../assets/images/2026-website-photos/AJAP4082.jpg';
import image108 from '../assets/images/2026-website-photos/AJAP6207 copy.jpg';
import image109 from '../assets/images/2026-website-photos/AJAP6440 copy.jpg';
import image110 from '../assets/images/2026-website-photos/AJAP6580 copy.jpg';
import image111 from '../assets/images/2026-website-photos/AJAP8397.jpg';
import image112 from '../assets/images/2026-website-photos/AJAP8459.jpg';
import image113 from '../assets/images/2026-website-photos/AJAP8594_RNS.jpg';
import image114 from '../assets/images/2026-website-photos/AJAP8607.jpg';
import image115 from '../assets/images/2026-website-photos/AJAP8615_RNS_RNS1.jpg';
import image116 from '../assets/images/2026-website-photos/AJAP8810_RNS.jpg';
import image117 from '../assets/images/2026-website-photos/AJAP9218 copy.jpg';
import image118 from '../assets/images/2026-website-photos/AJAP9463 copy.jpg';
import image119 from '../assets/images/2026-website-photos/AJAP9476 copy 2.jpg';
import image120 from '../assets/images/2026-website-photos/AJAP9512 copy.jpg';
import image121 from '../assets/images/2026-website-photos/GRA00795 copy.jpg';
import image122 from '../assets/images/2026-website-photos/GRA00822 copy.jpg';
import image123 from '../assets/images/2026-website-photos/Groom 02.jpg';
import image124 from '../assets/images/2026-website-photos/Groom 05.jpg';
import image125 from '../assets/images/2026-website-photos/Groom 06 copy.jpg';
import image126 from '../assets/images/2026-website-photos/Pondy outdoor copy01.jpg';
import image127 from '../assets/images/2026-website-photos/Pondy outdoor copy2.jpg';
import image128 from '../assets/images/2026-website-photos/Pondy outdoor copy3.jpg';
import image129 from '../assets/images/2026-website-photos/St01.jpg';
import image130 from '../assets/images/2026-website-photos/ZPS009.jpg';
import image131 from '../assets/images/2026-website-photos/ZPS0010.jpg';
import image132 from '../assets/images/2026-website-photos/ZPS21666 01.jpg';
import image133 from '../assets/images/2026-website-photos/ZPS21698.jpg';
import image134 from '../assets/images/2026-website-photos/ZPS21878.jpg';
import image135 from '../assets/images/2026-website-photos/ZPS22539.jpg';
import image136 from '../assets/images/2026-website-photos/ZPS22559.jpg';
import image137 from '../assets/images/2026-website-photos/ZPS22882.jpg';
import image138 from '../assets/images/2026-website-photos/ZPS22947.jpg';
import image139 from '../assets/images/2026-website-photos/corporate.jpeg';
import image140 from '../assets/images/2026-website-photos/indoor/002.jpg';

<<<<<<< HEAD
const PortfolioItem = ({ item, filteredIndex, openLightbox, onLoad, onError, canReveal }) => {
    const imgRef = React.useRef(null);

    React.useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            onLoad();
        }
    }, [onLoad]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative group overflow-hidden rounded cursor-pointer bg-obsidian min-h-[250px]"
            onClick={() => openLightbox(filteredIndex)}
        >
            <img
                ref={imgRef}
                src={item.src}
                alt={item.category}
                loading="lazy"
                onLoad={onLoad}
                onError={onError}
                className={`w-full h-auto block transition-all duration-1000 ease-out group-hover:scale-105 ${
                    canReveal ? 'opacity-100 blur-0' : 'opacity-0 blur-xl scale-110'
                }`}
            />

            {!canReveal && (
                <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-white/5 to-obsidian animate-pulse" />
            )}

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
    );
};

=======
// ─── Inject CSS column-count masonry once into <head> ─────────────────────────
// Why CSS columns instead of JS flex columns?
//   JS flex: we split items into N arrays and render N <div> columns.
//            Problem — we don't know real image heights before load,
//            so the last few items in each column leave gaps at the bottom.
//   CSS columns: the BROWSER flows every item top-to-bottom across columns
//                AFTER images load, so it always knows the real heights.
//                `break-inside: avoid` stops any single card being split.
//   Result: perfectly even column bottoms, zero JS math, works on resize.
const MASONRY_STYLE_ID = 'zp-masonry-styles';
if (typeof document !== 'undefined' && !document.getElementById(MASONRY_STYLE_ID)) {
  const s = document.createElement('style');
  s.id = MASONRY_STYLE_ID;
  s.textContent = `
    .zp-masonry {
      column-count: 3;
      column-gap: 1.25rem;   /* 20px — matches gap-5 */
    }
    @media (max-width: 1023px) { .zp-masonry { column-count: 2; } }
    @media (max-width: 639px)  { .zp-masonry { column-count: 1; } }

    /* KEY: tells browser never to split a card across columns */
    .zp-masonry-item {
      break-inside: avoid;
      -webkit-column-break-inside: avoid;
      display: inline-block;   /* required for break-inside in all browsers */
      width: 100%;
      margin-bottom: 1.25rem;
    }
  `;
  document.head.appendChild(s);
}

// ─── PhotoCard ────────────────────────────────────────────────────────────────
const PhotoCard = ({ item, index, onClick, isGrid, aspectRatio }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={isGrid ? "w-full" : "zp-masonry-item"}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, delay: Math.min(index * 0.012, 0.55) }}
        className="relative group overflow-hidden rounded-lg cursor-pointer bg-white/5 w-full"
        style={isGrid && aspectRatio ? { aspectRatio } : {}}
        onClick={onClick}
      >
        {/* Shimmer placeholder while loading */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/5">
            <Loader2 className="w-7 h-7 text-amber animate-spin" />
          </div>
        )}

        <img
          src={item.src}
          alt={item.category}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`transition-all duration-500 group-hover:scale-[1.03] ${
            isGrid && aspectRatio
              ? 'absolute inset-0 w-full h-full object-cover'
              : 'w-full h-auto block'
          } ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Hover label */}
        <div className="absolute inset-0 bg-obsidian/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
          <span className="text-emerald text-xs uppercase tracking-[0.2em]">
            {item.category}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

// ─── VideoCard ────────────────────────────────────────────────────────────────
const VideoCard = ({ item, index, isGrid }) => (
  <div className={isGrid ? "w-full" : "zp-masonry-item"}>
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.012, 0.55) }}
      className="relative aspect-video group overflow-hidden rounded-lg cursor-pointer bg-black"
      onClick={() => window.open('https://www.youtube.com/watch?v=' + item.videoId, '_blank')}
    >
      <img
        src={'https://img.youtube.com/vi/' + item.videoId + '/maxresdefault.jpg'}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { e.currentTarget.src = 'https://img.youtube.com/vi/' + item.videoId + '/0.jpg'; }}
      />
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-amber/90 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-amber/20">
          <Play className="w-5 h-5 text-obsidian fill-obsidian ml-0.5" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-ghost font-serif italic text-sm">{item.title}</p>
        {item.subtitle && (
          <p className="text-amber/80 text-[10px] uppercase tracking-widest mt-1">{item.subtitle}</p>
        )}
      </div>
    </motion.div>
  </div>
);

// ─── Portfolio ────────────────────────────────────────────────────────────────
>>>>>>> f7af2bf71d981ea78611e73d6eb4138be49f3179
const Portfolio = () => {
  const location = useLocation();

<<<<<<< HEAD
    const categories = ["All", "Wedding", "Corporate Events", "Promotion", "Baby Shower", "Indoor", "Outdoor", "Drone"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cols, setCols] = useState(3);
    const [loadedIndexes, setLoadedIndexes] = useState(new Set());

    React.useEffect(() => {
        setLoadedIndexes(new Set());
    }, [activeCategory]);

    const handleImageLoad = React.useCallback((index) => {
        setLoadedIndexes(prev => {
            const next = new Set(prev);
            next.add(index);
            return next;
        });
    }, []);

    const handleImageError = React.useCallback((index) => {
        setLoadedIndexes(prev => {
            const next = new Set(prev);
            next.add(index);
            return next;
        });
    }, []);

    React.useEffect(() => {
        const updateCols = () => {
            if (window.innerWidth < 768) setCols(1);
            else if (window.innerWidth < 1024) setCols(2);
            else setCols(3);
        };
        updateCols();
        window.addEventListener('resize', updateCols);
        return () => window.removeEventListener('resize', updateCols);
    }, []);
=======
  const portfolioItems = useMemo(() => [
    { id: 1,   category: 'Baby Shower',      src: image1   },
    { id: 2,   category: 'Birthday',         src: image2   },
    { id: 3,   category: 'Drone',            src: image3   },
    { id: 4,   category: 'Indoor',           src: image4   },
    { id: 5,   category: 'Outdoor',          src: image5   },
    { id: 6,   category: 'Baby Shower',      src: image6   },
    { id: 7,   category: 'Birthday',         src: image7   },
    { id: 8,   category: 'Drone',            src: image8   },
    { id: 9,   category: 'Indoor',           src: image9   },
    { id: 10,  category: 'Outdoor',          src: image10  },
    { id: 11,  category: 'Wedding',          src: image11  },
    { id: 12,  category: 'Baby Shower',      src: image12  },
    { id: 13,  category: 'Baby Shower',      src: image13  },
    { id: 14,  category: 'Birthday',         src: image14  },
    { id: 15,  category: 'Birthday',         src: image15  },
    { id: 16,  category: 'Birthday',         src: image16  },
    { id: 17,  category: 'Birthday',         src: image17  },
    { id: 18,  category: 'Indoor',           src: image18  },
    { id: 20,  category: 'Indoor',           src: image20  },
    { id: 22,  category: 'Indoor',           src: image22  },
    { id: 23,  category: 'Indoor',           src: image23  },
    { id: 24,  category: 'Indoor',           src: image24  },
    { id: 25,  category: 'Indoor',           src: image25  },
    { id: 26,  category: 'Indoor',           src: image26  },
    { id: 27,  category: 'Indoor',           src: image27  },
    { id: 28,  category: 'Indoor',           src: image28  },
    { id: 29,  category: 'Outdoor',          src: image29  },
    { id: 30,  category: 'Outdoor',          src: image30  },
    { id: 31,  category: 'Outdoor',          src: image31  },
    { id: 32,  category: 'Outdoor',          src: image32  },
    { id: 33,  category: 'Outdoor',          src: image33  },
    { id: 34,  category: 'Outdoor',          src: image34  },
    { id: 35,  category: 'Outdoor',          src: image35  },
    { id: 36,  category: 'Outdoor',          src: image36  },
    { id: 37,  category: 'Outdoor',          src: image37  },
    { id: 38,  category: 'Outdoor',          src: image38  },
    { id: 39,  category: 'Outdoor',          src: image39  },
    { id: 40,  category: 'Outdoor',          src: image40  },
    { id: 41,  category: 'Outdoor',          src: image41  },
    { id: 42,  category: 'Outdoor',          src: image42  },
    { id: 43,  category: 'Outdoor',          src: image43  },
    { id: 44,  category: 'Outdoor',          src: image44  },
    { id: 45,  category: 'Outdoor',          src: image45  },
    { id: 46,  category: 'Outdoor',          src: image46  },
    { id: 47,  category: 'Outdoor',          src: image47  },
    { id: 48,  category: 'Outdoor',          src: image48  },
    { id: 49,  category: 'Outdoor',          src: image49  },
    { id: 50,  category: 'Outdoor',          src: image50  },
    { id: 51,  category: 'Outdoor',          src: image51  },
    { id: 52,  category: 'Outdoor',          src: image52  },
    { id: 53,  category: 'Outdoor',          src: image53  },
    { id: 54,  category: 'Outdoor',          src: image54  },
    { id: 55,  category: 'Outdoor',          src: image55  },
    { id: 56,  category: 'Outdoor',          src: image56  },
    { id: 57,  category: 'Outdoor',          src: image57  },
    { id: 58,  category: 'Outdoor',          src: image58  },
    { id: 59,  category: 'Outdoor',          src: image59  },
    { id: 60,  category: 'Outdoor',          src: image60  },
    { id: 61,  category: 'Outdoor',          src: image61  },
    { id: 62,  category: 'Outdoor',          src: image62  },
    { id: 63,  category: 'Outdoor',          src: image63  },
    { id: 64,  category: 'Wedding',          src: image64  },
    { id: 65,  category: 'Wedding',          src: image65  },
    { id: 66,  category: 'Wedding',          src: image66  },
    { id: 67,  category: 'Wedding',          src: image67  },
    { id: 68,  category: 'Wedding',          src: image68  },
    { id: 69,  category: 'Wedding',          src: image69  },
    { id: 70,  category: 'Wedding',          src: image70  },
    { id: 71,  category: 'Wedding',          src: image71  },
    { id: 72,  category: 'Wedding',          src: image72  },
    { id: 73,  category: 'Wedding',          src: image73  },
    { id: 74,  category: 'Wedding',          src: image74  },
    { id: 75,  category: 'Wedding',          src: image75  },
    { id: 76,  category: 'Wedding',          src: image76  },
    { id: 77,  category: 'Wedding',          src: image77  },
    { id: 78,  category: 'Wedding',          src: image78  },
    { id: 79,  category: 'Wedding',          src: image79  },
    { id: 80,  category: 'Wedding',          src: image80  },
    { id: 81,  category: 'Wedding',          src: image81  },
    { id: 82,  category: 'Wedding',          src: image82  },
    { id: 83,  category: 'Wedding',          src: image83  },
    { id: 84,  category: 'Wedding',          src: image84  },
    { id: 85,  category: 'Wedding',          src: image85  },
    { id: 86,  category: 'Wedding',          src: image86  },
    { id: 87,  category: 'Wedding',          src: image87  },
    { id: 88,  category: 'Wedding',          src: image88  },
    { id: 89,  category: 'Wedding',          src: image89  },
    { id: 90,  category: 'Wedding',          src: image90  },
    { id: 91,  category: 'Wedding',          src: image91  },
    { id: 92,  category: 'Wedding',          src: image92  },
    { id: 93,  category: 'Wedding',          src: image93  },
    { id: 94,  category: 'Wedding',          src: image94  },
    { id: 95,  category: 'Wedding',          src: image95  },
    { id: 96,  category: 'Wedding',          src: image96  },
    { id: 97,  category: 'Wedding',          src: image97  },
    { id: 98,  category: 'Wedding',          src: image98  },
    { id: 99,  category: 'Wedding',          src: image99  },
    { id: 100, category: 'Wedding',          src: image100 },
    { id: 101, category: 'Wedding',          src: image101 },
    { id: 102, category: 'Wedding',          src: image102 },
    { id: 103, category: 'Wedding',          src: image103 },
    { id: 104, category: 'Wedding',          src: image104 },
    { id: 105, category: 'Wedding',          src: image105 },
    { id: 106, category: 'Wedding',          src: image106 },
    { id: 107, category: 'Wedding',          src: image107 },
    { id: 108, category: 'Wedding',          src: image108 },
    { id: 109, category: 'Wedding',          src: image109 },
    { id: 110, category: 'Wedding',          src: image110 },
    { id: 111, category: 'Wedding',          src: image111 },
    { id: 112, category: 'Wedding',          src: image112 },
    { id: 113, category: 'Wedding',          src: image113 },
    { id: 114, category: 'Wedding',          src: image114 },
    { id: 115, category: 'Wedding',          src: image115 },
    { id: 116, category: 'Wedding',          src: image116 },
    { id: 117, category: 'Wedding',          src: image117 },
    { id: 118, category: 'Wedding',          src: image118 },
    { id: 119, category: 'Wedding',          src: image119 },
    { id: 120, category: 'Wedding',          src: image120 },
    { id: 121, category: 'Wedding',          src: image121 },
    { id: 122, category: 'Wedding',          src: image122 },
    { id: 123, category: 'Wedding',          src: image123 },
    { id: 124, category: 'Wedding',          src: image124 },
    { id: 125, category: 'Wedding',          src: image125 },
    { id: 126, category: 'Wedding',          src: image126 },
    { id: 127, category: 'Wedding',          src: image127 },
    { id: 128, category: 'Wedding',          src: image128 },
    { id: 129, category: 'Wedding',          src: image129 },
    { id: 130, category: 'Wedding',          src: image130 },
    { id: 131, category: 'Birthday',         src: image131 },
    { id: 132, category: 'Birthday',         src: image132 },
    { id: 133, category: 'Wedding',          src: image133 },
    { id: 134, category: 'Wedding',          src: image134 },
    { id: 135, category: 'Wedding',          src: image135 },
    { id: 136, category: 'Wedding',          src: image136 },
    { id: 137, category: 'Wedding',          src: image137 },
    { id: 138, category: 'Wedding',          src: image138 },
    { id: 139, category: 'Corporate Events', src: image139 },
    { id: 140, category: 'Indoor',           src: image140 },
    { id: 141, category: 'Promotion', type: 'video', videoId: 'L9Q5F3tYmc4', title: 'Luxury Property Showcase', subtitle: 'Real Estate Promotion' },
    { id: 142, category: 'Promotion', type: 'video', videoId: '43p4vf2Xcn4', title: 'Brand Spotlight',          subtitle: 'Promotion Video'       },
    { id: 143, category: 'Promotion', type: 'video', videoId: 'rSiopuke1YA', title: 'Product Launch',           subtitle: 'Corporate Events'      },
  ], []);
>>>>>>> f7af2bf71d981ea78611e73d6eb4138be49f3179

  const categories = [
    'All', 'Wedding', 'Corporate Events', 'Promotion',
    'Baby Shower', 'Indoor', 'Outdoor', 'Drone',
  ];

<<<<<<< HEAD
    const masonryColumns = useMemo(() => {
        const columns = Array.from({ length: cols }, () => []);
        filteredItems.forEach((item, i) => {
            columns[i % cols].push({ ...item, filteredIndex: i });
        });
        return columns;
    }, [filteredItems, cols]);

    const sequentialRevealIndex = useMemo(() => {
        let maxIndex = -1;
        for (let i = 0; i < filteredItems.length; i++) {
            if (loadedIndexes.has(i)) {
                maxIndex = i;
            } else {
                break;
            }
        }
        return maxIndex;
    }, [loadedIndexes, filteredItems.length]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };
=======
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen,   setLightboxOpen]   = useState(false);
  const [currentIndex,   setCurrentIndex]   = useState(0);
  const [filterLoading,  setFilterLoading]  = useState(true);
>>>>>>> f7af2bf71d981ea78611e73d6eb4138be49f3179

  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category);
    }
  }, [location]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All')
      return portfolioItems.filter(i => i.type !== 'video');
    return portfolioItems.filter(i => i.category === activeCategory);
  }, [activeCategory, portfolioItems]);

  // Loading gate
  useEffect(() => {
    setFilterLoading(true);
    const toLoad = filteredItems.filter(i => i.type !== 'video').slice(0, 6).map(i => i.src);
    if (!toLoad.length) { setFilterLoading(false); return; }

    let done = 0, imgOk = false, timeOk = activeCategory !== 'All';
    const tryFinish = () => { if (imgOk && timeOk) setFilterLoading(false); };
    const tick      = () => { if (++done >= toLoad.length) { imgOk = true; tryFinish(); } };
    toLoad.forEach(src => { const img = new Image(); img.onload = img.onerror = tick; img.src = src; });

    let minTimer;
    if (activeCategory === 'All') minTimer = setTimeout(() => { timeOk = true; tryFinish(); }, 2000);
    const safety = setTimeout(() => setFilterLoading(false), 5000);
    return () => { clearTimeout(safety); if (minTimer) clearTimeout(minTimer); };
  }, [filteredItems, activeCategory]);

  const openLightbox     = (i) => { setCurrentIndex(i); setLightboxOpen(true); };
  const navigateLightbox = (dir) =>
    setCurrentIndex(p => dir === 'next'
      ? (p + 1) % filteredItems.length
      : (p - 1 + filteredItems.length) % filteredItems.length);

  const getGridClass = () => {
    if (activeCategory === 'Promotion') {
      return "grid grid-cols-1 md:grid-cols-3 gap-5";
    }
    if (activeCategory === 'Drone') {
      return "grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-5";
    }
    if (activeCategory === 'Baby Shower') {
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full";
    }
    if (activeCategory === 'Corporate Events') {
      return "grid grid-cols-1 max-w-md mx-auto gap-5";
    }
    return "zp-masonry";
  };

  return (
    <main className="min-h-screen bg-obsidian text-ghost pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-widest uppercase mb-6"
          >
            Our <span className="text-amber italic">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-ghost/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore a curated collection of our finest work, spanning across diverse events and themes.
            Every image is a testament to our dedication to storytelling and aesthetic excellence.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                'px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ' +
                (activeCategory === cat
                  ? 'bg-emerald text-obsidian border-emerald'
                  : 'bg-transparent text-ghost border-emerald/20 hover:border-amber hover:text-amber')
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="min-h-[20vh]">
          {filterLoading ? (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center min-h-[40vh]"
            >
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-black rounded-[12px] border border-ghost/10 overflow-hidden flex items-center justify-center shadow-2xl z-10 p-2">
                  <img src={logo} alt="ZeroPixel" className="w-full h-full object-contain" />
                </div>
                <motion.div className="absolute inset-[-10px] rounded-[16px] border border-amber/30"
                  animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
                <motion.div className="absolute inset-[-20px] rounded-[20px] border border-emerald/20"
                  animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
                <motion.div className="absolute inset-0 bg-amber/20 rounded-[12px] blur-xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
              </div>
              <p className="text-ghost/60 uppercase tracking-widest text-sm font-serif italic">
                Curating Masterpieces…
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              {/*
               * CSS column-count masonry — the correct approach.
               * The browser knows real image heights after decode,
               * so it distributes cards perfectly with zero JS math.
               * break-inside:avoid on .zp-masonry-item = no card ever
               * gets sliced across two columns.
               */}
              <div
                key={activeCategory}
                className={getGridClass()}
              >
                {filteredItems.map((item, index) =>
                  item.type === 'video' ? (
                    <VideoCard key={item.id} item={item} index={index} isGrid={activeCategory === 'Promotion'} />
                  ) : (
                    <PhotoCard
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={() => openLightbox(index)}
                      isGrid={['Promotion', 'Drone', 'Baby Shower', 'Corporate Events'].includes(activeCategory)}
                      aspectRatio={activeCategory === 'Drone' ? '4/3' : activeCategory === 'Baby Shower' ? '3/4' : ''}
                    />
                  )
                )}
              </div>
            </AnimatePresence>
          )}
        </div>

<<<<<<< HEAD
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

                <div className="flex gap-6 items-start">
                    {masonryColumns.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-6 flex-1">
                            <AnimatePresence>
                                {column.map((item) => {
                                    return (
                                        <PortfolioItem
                                            key={item.id}
                                            item={item}
                                            filteredIndex={item.filteredIndex}
                                            openLightbox={openLightbox}
                                            onLoad={() => handleImageLoad(item.filteredIndex)}
                                            onError={() => handleImageError(item.filteredIndex)}
                                            canReveal={item.filteredIndex <= sequentialRevealIndex}
                                        />
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    ))}
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
=======
        {/* YouTube CTA */}
        {!filterLoading && activeCategory === 'Promotion' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-ghost/60 font-serif italic text-xl mb-4">
              Want to see more of our cinematic stories?
            </p>
            <a
              href="https://www.youtube.com/@zeropixelphotographystudio"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-ghost/40 text-ghost font-bold uppercase tracking-widest text-sm rounded-full hover:border-amber hover:text-amber transition-colors"
            >
              Visit Our YouTube Channel
              <Play className="w-4 h-4 fill-current" />
            </a>
          </motion.div>
        )}

      </div>

      <Lightbox
        isOpen={lightboxOpen}
        items={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={navigateLightbox}
      />
    </main>
  );
>>>>>>> f7af2bf71d981ea78611e73d6eb4138be49f3179
};

export default Portfolio;