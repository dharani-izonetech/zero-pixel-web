import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

const VideoPromotion = () => {
    const scrollRef        = useRef(null);
    const isHoveredRef     = useRef(false);   // no state → no re-renders
    const isPausedRef      = useRef(false);   // manual-click cooldown flag
    const intervalRef      = useRef(null);    // single long-lived interval
    const pauseTimerRef    = useRef(null);    // resume timer after manual click

    const promotionVideos = [
        // Wedding
        { id: 'jNvkKff8_6o', title: 'Traditional Wedding',      subtitle: 'Wedding Highlights'    },
        { id: 'G0PCet-BMOI', title: 'Candid Moments',           subtitle: 'Wedding Highlights'    },
        { id: 'FpxCIYKIgn0', title: 'Pre-Wedding Magic',        subtitle: 'Wedding Highlights'    },
        // Real Estate / Corporate
        { id: 'L9Q5F3tYmc4', title: 'Luxury Property Showcase', subtitle: 'Real Estate Promotion' },
        { id: '43p4vf2Xcn4', title: 'Brand Spotlight',          subtitle: 'Promotion Video'       },
        { id: 'rSiopuke1YA', title: 'Product Launch',           subtitle: 'Corporate Events'      },
        // Baby / Birthday
        { id: 'PuGmgqXG-PM', title: 'A New Beginning',          subtitle: 'Baby Shower'           },
        { id: 'HERglHu_kHk', title: 'First Year Milestone',     subtitle: 'Birthday Celebration'  },
        { id: 'nAxtUyxoOHk', title: 'Sweet Memories',           subtitle: 'Birthday Celebration'  },
        // Outdoor / Aerial
        { id: '5DI6aPXrHyU', title: 'Cinematic Drone',          subtitle: 'Outdoor & Aerial'      },
        { id: 'vIfAPGrbtaY', title: 'Nature Portraits',         subtitle: 'Outdoor & Aerial'      },
        { id: 'MIS5t38MmvQ', title: 'Beach Pre-Wedding',        subtitle: 'Outdoor & Aerial'      },
    ];

    // Triple-clone for infinite loop illusion
    const extendedVideos = [
        ...promotionVideos,
        ...promotionVideos,
        ...promotionVideos,
    ];

    // ─── helpers ──────────────────────────────────────────────────────────────

    const getItemWidth = useCallback(() => {
        // card offsetWidth + 24px gap (gap-6)
        return scrollRef.current?.firstChild
            ? scrollRef.current.firstChild.offsetWidth + 24
            : 474;
    }, []);

    const doScroll = useCallback(
        (direction) => {
            const el = scrollRef.current;
            if (!el) return;

            const itemWidth = getItemWidth();
            const setWidth  = promotionVideos.length * itemWidth;

            if (direction === 'right') {
                // Approaching the end of clone-3 → silently jump to clone-2
                if (el.scrollLeft >= setWidth * 2 - itemWidth) {
                    el.scrollLeft -= setWidth;
                }
                el.scrollBy({ left: itemWidth, behavior: 'smooth' });
            } else {
                // Approaching the start of clone-1 → silently jump to clone-2
                if (el.scrollLeft <= setWidth + itemWidth) {
                    el.scrollLeft += setWidth;
                }
                el.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            }
        },
        [getItemWidth],
    );

    // ─── auto-scroll (single interval, reads refs — never re-mounts) ──────────

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!isHoveredRef.current && !isPausedRef.current) {
                doScroll('right');
            }
        }, 3500);

        return () => clearInterval(intervalRef.current);
    }, [doScroll]);

    // ─── set initial scroll position to middle clone set ──────────────────────

    useEffect(() => {
        const id = setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft =
                    promotionVideos.length * getItemWidth();
            }
        }, 100);
        return () => clearTimeout(id);
    }, [getItemWidth]);

    // ─── manual button handler ─────────────────────────────────────────────────

    const handleManualScroll = useCallback(
        (direction) => {
            doScroll(direction);

            // Pause auto-scroll for 4 s then resume — interval keeps running
            isPausedRef.current = true;
            if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
            pauseTimerRef.current = setTimeout(() => {
                isPausedRef.current = false;
            }, 4000);
        },
        [doScroll],
    );

    // ─── cleanup on unmount ────────────────────────────────────────────────────

    useEffect(() => {
        return () => {
            if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        };
    }, []);

    // ─── render ───────────────────────────────────────────────────────────────

    return (
        <section className="bg-obsidian py-24 relative overflow-hidden">

            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* ── Section Header ─────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-amber text-xs uppercase tracking-[0.4em] font-bold mb-4 block"
                        >
                            Cinematic Excellence
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif text-ghost tracking-wide leading-tight"
                        >
                            Our{' '}
                            <span className="text-amber italic">Motion Portraits</span>
                        </motion.h2>
                    </div>
                </div>

                {/* ── Carousel ───────────────────────────────────────────── */}
                <div
                    className="relative"
                    onMouseEnter={() => { isHoveredRef.current = true;  }}
                    onMouseLeave={() => { isHoveredRef.current = false; }}
                >
                    {/* Left nav button */}
                    <button
                        aria-label="Scroll left"
                        onClick={() => handleManualScroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-30 p-4 rounded-full border border-ghost/10 bg-obsidian/80 hover:border-amber/50 transition-colors text-ghost/60 hover:text-amber backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right nav button */}
                    <button
                        aria-label="Scroll right"
                        onClick={() => handleManualScroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-30 p-4 rounded-full border border-ghost/10 bg-obsidian/80 hover:border-amber/50 transition-colors text-ghost/60 hover:text-amber backdrop-blur-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scroll track */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto py-4 snap-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {extendedVideos.map((video, index) => (
                            <motion.div
                                key={video.id + '-' + index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '100px' }}
                                transition={{ delay: (index % 4) * 0.1 }}
                                className="flex-none w-[300px] md:w-[450px] aspect-video relative group cursor-pointer rounded-xl overflow-hidden snap-center"
                            >
                                {/* Thumbnail */}
                                <img
                                    src={'https://img.youtube.com/vi/' + video.id + '/maxresdefault.jpg'}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            'https://img.youtube.com/vi/' + video.id + '/0.jpg';
                                    }}
                                />

                                {/* Play button overlay */}
                                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-amber/90 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-amber/20 opacity-80 group-hover:opacity-100">
                                        <Play className="w-6 h-6 text-obsidian fill-obsidian ml-1" />
                                    </div>
                                </div>

                                {/* Full-card link — z-20 so it sits above overlays */}
                                <a
                                    href={'https://www.youtube.com/watch?v=' + video.id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-20"
                                    aria-label={'Watch ' + video.title + ' on YouTube'}
                                >
                                    <span className="sr-only">
                                        {'Watch ' + video.title + ' on YouTube'}
                                    </span>
                                </a>

                                {/* Hover caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                                    <p className="text-ghost font-serif italic text-lg">
                                        {video.title}
                                    </p>
                                    <p className="text-amber/80 text-xs uppercase tracking-widest mt-1">
                                        {video.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ────────────────────────────────────────────────── */}
                <div className="mt-8 text-center flex flex-col items-center">
                    <p className="text-ghost/60 font-serif italic text-xl mb-4">
                        Want to see more of our cinematic stories?
                    </p>
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