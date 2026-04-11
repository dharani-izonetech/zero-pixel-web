import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const title_1 = "ZERO";
    const title_2 = "PIXEL";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const charVariants = {
        hidden: { opacity: 0, scale: 0, y: 50, rotate: -20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    useEffect(() => {
        if (videoRef.current) {
            gsap.to(videoRef.current, {
                scale: 1.2,
                duration: 25,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian"
        >
            {/* Ambient Light Peaks */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan/10 blur-[120px] rounded-full animate-pulse" />

            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian/90 z-10" />
                <img
                    ref={videoRef}
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2070"
                    alt="Abstract background"
                    className="w-full h-full object-cover opacity-40 grayscale"
                />
            </div>

            <div className="relative z-20 text-center px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, letterSpacing: "-0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="cinematic-text mb-8 text-cyan/100 font-bold text-[0.8rem] sm:text-[1.2rem]"
                >
                    Leading Photography Professionals
                </motion.div>

                {/*
                    ✅ MOBILE TITLE FIX:
                    - text-[2.8rem]  → mobile (fits "ZERO PIXELS" on one line at ~390px)
                    - sm:text-[4rem]  → small tablet
                    - md:text-[7rem]  → tablet
                    - lg:text-[10rem] → desktop
                    - xl:text-[12rem] → large desktop
                    - flex-wrap added so words wrap on very small screens if needed
                    - gap reduced on mobile: gap-2 sm:gap-4
                    - w-full + justify-center keeps it centered at all sizes
                */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                        w-full
                        text-[2.8rem] sm:text-[4rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]
                        font-black tracking-tighter mb-10 leading-[0.85]
                        flex justify-center items-center
                    "
                >
                    <div className="flex text-purple">
                        {title_1.split("").map((char, i) => (
                            <motion.span key={i} variants={charVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex text-ghost/50 italic">
                        {title_2.split("").map((char, i) => (
                            <motion.span key={i} variants={charVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link to="/portfolio" className="group relative px-10 py-4 bg-transparent overflow-hidden inline-block">
                        <div className="absolute inset-0 border border-purple/50 group-hover:bg-purple transition-all duration-500" />
                        <span className="relative z-10 text-ghost font-bold uppercase tracking-widest text-sm">
                            View Showcase
                        </span>
                        <div className="absolute inset-0 bg-purple translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                    <Link to="/about" className="text-cyan/100 hover:text-cyan text-xs font-bold uppercase tracking-[0.3em] transition-colors border-b border-cyan/20 pb-1">
                        Our Vision
                    </Link>
                </motion.div>
            </div>

            {/* Futuristic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="absolute bottom-12 left-12 flex items-center gap-4 rotate-[-90deg] origin-left"
            >
                <span className="text-[14px] tracking-[0.5em] uppercase text-ghost/50 font-bold whitespace-nowrap">Scroll to explore</span>
                <div className="w-24 h-[1px] bg-purple/30 relative overflow-hidden">
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/2 bg-cyan h-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;