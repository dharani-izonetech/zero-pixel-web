import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

const VideoPromotion = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const promotionVideos = [
        // Wedding
        { id: "jNvkKff8_6o", title: "Traditional Wedding", subtitle: "Wedding Highlights" },
        { id: "G0PCet-BMOI", title: "Candid Moments", subtitle: "Wedding Highlights" },
        { id: "FpxCIYKIgn0", title: "Pre-Wedding Magic", subtitle: "Wedding Highlights" },
        // Corporate Events
        { id: "L9Q5F3tYmc4", title: "Luxury Property Showcase", subtitle: "Real Estate Promotion" },
        { id: "43p4vf2Xcn4", title: "Brand Spotlight", subtitle: "Promotion Video" },
        { id: "rSiopuke1YA", title: "Product Launch", subtitle: "Corporate Events" },
        // Baby Shower
        { id: "PuGmgqXG-PM", title: "A New Beginning", subtitle: "Baby Shower" },
        { id: "HERglHu_kHk", title: "First Year Milestone", subtitle: "Birthday Celebration" },
        { id: "nAxtUyxoOHk", title: "Sweet Memories", subtitle: "Birthday Celebration" },
        // Outdoor / Aerial
        { id: "5DI6aPXrHyU", title: "Cinematic Drone", subtitle: "Outdoor & Aerial" },
        { id: "vIfAPGrbtaY", title: "Nature Portraits", subtitle: "Outdoor & Aerial" },
        { id: "MIS5t38MmvQ", title: "Beach Pre-Wedding", subtitle: "Outdoor & Aerial" },
    ];

    const extendedVideos = [...promotionVideos, ...promotionVideos, ...promotionVideos];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollRef.current && scrollRef.current.firstChild) {
                const itemWidth = scrollRef.current.firstChild.offsetWidth + 24; // width + gap
                scrollRef.current.scrollLeft = promotionVideos.length * itemWidth;
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const scroll = useCallback((direction) => {
        const { current } = scrollRef;
        if (current) {
            const itemWidth = current.firstChild ? current.firstChild.offsetWidth + 24 : 400;
            const setWidth = promotionVideos.length * itemWidth;
            
            if (direction === 'right') {
                if (current.scrollLeft >= setWidth * 2) {
                    current.scrollLeft -= setWidth;
                }
                current.scrollBy({ left: itemWidth, behavior: 'smooth' });
            } else {
                if (current.scrollLeft <= setWidth) {
                    current.scrollLeft += setWidth;
                }
                current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            }
        }
    }, []);

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                scroll('right');
            }, 3500);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered, scroll]);

    return (
        <section className="bg-obsidian py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-amber text-xs uppercase tracking-[0.4em] font-bold mb-4 block"
                        >
                            Cinematic Excellence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-serif text-ghost tracking-wide leading-tight"
                        >
                            Our <span className="text-amber italic">Motion Portraits</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Video Scroll Container Wrapper */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-30 p-4 rounded-full border border-ghost/10 bg-obsidian/80 hover:border-amber/50 transition-colors text-ghost/60 hover:text-amber backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-30 p-4 rounded-full border border-ghost/10 bg-obsidian/80 hover:border-amber/50 transition-colors text-ghost/60 hover:text-amber backdrop-blur-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Video Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto py-4 hide-scrollbar snap-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {extendedVideos.map((video, index) => (
                            <motion.div
                                key={`${video.id}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "100px" }}
                                transition={{ delay: (index % 4) * 0.1 }}
                                className="flex-none w-[300px] md:w-[450px] aspect-video relative group cursor-pointer rounded-xl overflow-hidden snap-center"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                    alt={`Video thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-amber/90 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-amber/20 opacity-80 group-hover:opacity-100">
                                        <Play className="w-6 h-6 text-obsidian fill-obsidian ml-1" />
                                    </div>
                                </div>

                                {/* Iframe overlay on click - simple version for now, could be a modal */}
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-20"
                                >
                                    <span className="sr-only">Play Video</span>
                                </a>

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-ghost font-serif italic text-lg">{video.title}</p>
                                    <p className="text-amber/80 text-xs uppercase tracking-widest mt-1">{video.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center flex flex-col items-center">
                    <p className="text-ghost/60 font-serif italic text-xl mb-4">Want to see more of our cinematic stories?</p>
                    <a
                        href="https://www.youtube.com/@zeropixelphotographystudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-ghost/40 text-ghost font-bold uppercase tracking-widest text-sm rounded-full hover:border-amber hover:text-amber transition-colors"
                    >
                        Visit Our YouTube Channel
                        <Play className="w-4 h-4 fill-current" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VideoPromotion;
