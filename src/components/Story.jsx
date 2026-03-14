import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section id="story" className="section-padding bg-obsidian relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-purple/10 blur-[100px] rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className="cinematic-text mb-6 text-purple font-black tracking-[0.4em]">The Visionary Path</p>
                        <h2 className="text-5xl md:text-8xl leading-[0.85] font-black text-ghost tracking-tighter uppercase">
                            We bridge <br />
                            <span className="text-cyan italic">Reality</span> & <br />
                            <span className="text-purple/50">Digital Soul</span>.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xl text-ghost/40 leading-relaxed font-light max-w-lg"
                    >
                        Zero Pixels isn't just a studio; it's a movement toward visual purity. We strip away the noise to find the fundamental truth in every frame, creating a dialogue between the viewer and the unseen.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <a href="#works" className="group flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] text-purple">
                            Explore Manifesto
                            <div className="relative w-16 h-[2px] bg-purple/30 overflow-hidden">
                                <div className="absolute inset-0 bg-cyan -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        </a>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="aspect-[3/4] overflow-hidden border border-purple/10"
                        >
                            <img
                                src="/src/assets/images/2026 website photos/AJAP3578.jpg"
                                alt="Story 1"
                                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                            className="aspect-[4/5] overflow-hidden mt-16 border border-cyan/10"
                        >
                            <img
                                src="/src/assets/images/2026 website photos/8V3A9494 copy.jpg"
                                alt="Story 2"
                                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
