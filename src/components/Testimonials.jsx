import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const testimonials = [
        {
            quote: "ZEROPIXEL doesn't just take photos; they capture the very essence of a digital soul. The cinematic quality is unmatched.",
            author: "Julian Thorne",
            role: "Cyber Architect"
        },
        {
            quote: "The most professional and aesthetically profound experience I've had with a digital-first studio.",
            author: "Elena Rossi",
            role: "Visual Strategist"
        },
        {
            quote: "Transformative visuals that elevated our brand narrative to a completely new level of neon luxury.",
            author: "Marcus Aurelius",
            role: "Founder, XII Labs"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-32 bg-obsidian overflow-hidden border-t border-purple/5">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="cinematic-text mb-4 text-cyan font-black tracking-[0.5em]">Global Praise</p>
                </motion.div>

                <div className="relative h-64 md:h-48 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="absolute w-full"
                        >
                            <h3 className="text-2xl md:text-5xl font-black leading-[1.1] mb-12 text-ghost uppercase italic">
                                "{testimonials[index].quote}"
                            </h3>
                            <div className="flex flex-col items-center">
                                <p className="font-black tracking-[0.3em] uppercase text-sm text-purple">{testimonials[index].author}</p>
                                <p className="text-ghost/20 text-[10px] uppercase tracking-[0.5em] mt-2 font-bold">{testimonials[index].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-6 mt-32">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-16 h-[2px] transition-all duration-700 relative overflow-hidden ${i === index ? 'bg-purple' : 'bg-purple/10'
                                }`}
                        >
                            {i === index && (
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className="absolute inset-0 bg-cyan"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
