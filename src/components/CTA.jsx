import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-obsidian flexitems-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2070"
                    alt="Photographer holding camera"
                    className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif text-ghost mb-6 tracking-wide"
                >
                    Let's Create <br />
                    <span className="text-amber italic font-light">Masterpieces</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-ghost/80 text-lg font-light mb-12 max-w-2xl mx-auto"
                >
                    Every click is a commitment to telling your story with elegance and precision. Are you ready to capture your moments?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        to="/contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald text-obsidian font-serif tracking-widest uppercase text-sm overflow-hidden w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-2">
                            Book a Shoot
                        </span>
                        <ArrowRight className="absolute right-6 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
                        <div className="absolute inset-0 bg-amber transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-obsidian transition-colors duration-300 pointer-events-none absolute inset-0 justify-center opacity-0 group-hover:opacity-100">
                        </span>
                    </Link>

                    <Link
                        to="/portfolio"
                        className="group inline-flex items-center gap-3 text-ghost uppercase tracking-widest text-sm hover:text-amber transition-colors duration-300"
                    >
                        View More Work
                        <span className="w-8 h-[1px] bg-emerald group-hover:bg-amber transition-colors duration-300 group-hover:w-12"></span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
