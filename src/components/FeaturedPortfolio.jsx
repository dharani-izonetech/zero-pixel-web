import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedPortfolio = () => {
    // Placeholder image URLs and categories since actual folders were not found
    const portfolioItems = [
        { id: 1, category: "Baby Shower", src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-2" },
        { id: 2, category: "Birthday", src: "https://images.unsplash.com/photo-1530103862676-de8892cae1ef?auto=format&fit=crop&q=80&w=800", span: "col-span-2 row-span-1" },
        { id: 3, category: "Drone", src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-1" },
        { id: 4, category: "Indoor", src: "https://images.unsplash.com/photo-1506509658097-400d724eb8cc?auto=format&fit=crop&q=80&w=800", span: "col-span-1 row-span-2" },
        { id: 5, category: "Outdoor", src: "https://images.unsplash.com/photo-1517457210115-c21124231b14?auto=format&fit=crop&q=80&w=800", span: "col-span-2 row-span-1" },
    ];

    return (
        <section className="py-24 bg-obsidian text-ghost px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-4"
                        >
                            Featured <span className="text-amber italic">Portfolio</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-emerald uppercase tracking-[0.2em] text-sm"
                        >
                            Glimpses of Timeless Moments
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 md:mt-0"
                    >
                        <Link to="/portfolio" className="group inline-flex items-center gap-4 text-ghost uppercase tracking-widest text-sm hover:text-amber transition-colors duration-300">
                            View Full Portfolio
                            <span className="w-12 h-[1px] bg-amber group-hover:w-20 transition-all duration-300"></span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 md:h-[800px]">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative group overflow-hidden ${item.span} bg-forest/20 rounded-lg`}
                        >
                            <img
                                src={item.src}
                                alt={item.category}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <h3 className="text-2xl font-serif text-ghost tracking-widest uppercase">{item.category}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPortfolio;
