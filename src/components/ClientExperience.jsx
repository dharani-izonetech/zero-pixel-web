import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Clock, Camera } from 'lucide-react';

const ClientExperience = () => {
    const stats = [
        { label: "Years Experience", value: "15", icon: Clock },
        { label: "Happy Clients", value: "2.5k", icon: Heart },
        { label: "Awards Won", value: "15", icon: Award },
        { label: "Shoots Completed", value: "7k+", icon: Camera }
    ];

    return (
        <section className="py-24 bg-obsidian text-ghost px-6 md:px-12 border-t border-forest/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6"
                    >
                        The <br /><span className="text-emerald italic">Experience</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-16 h-[1px] bg-amber mb-8 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-ghost/80 font-light leading-relaxed mb-8 max-w-lg"
                    >
                        We believe that photography is more than just capturing a moment; it's about preserving a feeling. Our approach is deeply personal, ensuring that every session is comfortable, authentic, and tailored entirely to you. From the initial consultation to the final cinematic delivery, professionalism and passion guide our every step.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-emerald text-sm uppercase tracking-widest"
                    >
                        Your story. Our lens.
                    </motion.p>
                </div>

                <div className="md:w-1/2 grid grid-cols-2 gap-8 w-full">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex flex-col items-center text-center p-6 bg-forest/20 rounded-lg border border-emerald/5 hover:border-emerald/20 transition-colors"
                            >
                                <Icon className="w-10 h-10 text-amber mb-4" strokeWidth={1} />
                                <span className="text-4xl font-serif font-light tracking-wider text-ghost mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-xs uppercase tracking-[0.2em] text-emerald/80 mt-auto">
                                    {stat.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ClientExperience;
