import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Eye, Heart, Award } from 'lucide-react';
import aboutHeroImg from '../assets/images/2026-website-photos/AJAP8810_RNS.jpg';

const About = () => {
    const values = [
        { title: "Vision", description: "Seeing the extraordinary in the ordinary.", icon: Eye },
        { title: "Passion", description: "Driven by an unrelenting love for the craft.", icon: Heart },
        { title: "Precision", description: "Meticulous attention to every frame and detail.", icon: Camera }
    ];

    return (
        <motion.main 
            className="min-h-screen bg-obsidian text-ghost pt-28 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-emerald uppercase tracking-[0.3em] text-sm mb-6 pt-10"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif tracking-widest leading-tight mb-8"
                    >
                        Capturing <br />The<span className="text-amber italic">Unseen</span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-24 h-[1px] bg-emerald mb-8 origin-left"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-6 text-ghost/100 leading-relaxed text-lg"
                    >
                        <p>
                            We are more than just photographers; we are visual narrators. Founded on the belief that every fleeting moment holds profound significance, our studio has dedicated itself to the art of cinematic storytelling.
                        </p>
                        <p>
                            From the gentle morning light of an outdoor session to the electric energy of a celebration, we approach every project with fresh eyes and a relentless pursuit of perfection. Our lens is our brush, light is our paint, and your life is the canvas.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 relative w-full aspect-[4/5] md:aspect-square">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="w-full h-full relative"
                    >
                        <img
                            src={aboutHeroImg}
                            alt="Photographer holding a vintage camera"
                            className="w-full h-full object-cover rounded-sm transition-all duration-1000"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-forest py-16 px-6 md:px-12 border-y border-emerald/10">
                <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 flex flex-col items-center"
                    >
                        <h2 className="text-4xl font-serif tracking-widest uppercase mb-4 text-ghost text-center">Core <span className="text-amber italic">Values</span></h2>
                        <div className="w-16 h-[1px] bg-emerald mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full">
                        {values.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="p-8 border border-emerald/40 hover:border-emerald transition-colors duration-500 bg-obsidian/30 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center"
                                >
                                    <div className="flex justify-center mb-6">
                                        <Icon className="w-12 h-12 text-amber" strokeWidth={1} />
                                    </div>
                                    <h3 className="text-2xl font-serif uppercase tracking-widest text-ghost mb-4">{item.title}</h3>
                                    <p className="text-ghost/60 text-center">{item.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Photographer Profile (Optional/Mock) */}
            <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center"
                >
                    <p className="text-emerald text-sm uppercase tracking-widest mb-4 text-center">The Artist</p>
                    <h2 className="text-5xl font-serif tracking-wider mb-8 text-center">Elias <span className="italic text-amber font-light">Thorne</span></h2>
                    <p className="max-w-2xl mx-auto text-ghost/100 leading-relaxed text-center">
                        Award-winning photographer with over a decade of experience capturing humanity in its rawest, most beautiful forms. Known for a signature cinematic style that blends natural light with deep, emotive shadows.
                    </p>
                </motion.div>
            </section>
        </motion.main>
    );
};

export default About;
