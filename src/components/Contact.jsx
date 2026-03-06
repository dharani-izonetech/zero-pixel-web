import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-obsidian relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-cyan/5 blur-[120px] rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p className="cinematic-text mb-6 text-purple font-black tracking-[0.5em]">Collaboration</p>
                    <h2 className="text-6xl md:text-8xl mb-8 text-ghost font-black tracking-tighter uppercase leading-[0.8]">
                        Capture the <br />
                        <span className="text-cyan italic">Undefined</span>.
                    </h2>
                    <p className="text-ghost/30 text-xl font-light leading-relaxed max-w-md">
                        We are seeking partners who value the intersection of digital craft and artistic soul. Let's build the future together.
                    </p>

                    <div className="mt-16 space-y-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-purple font-black mb-2">Connect</p>
                            <p className="text-3xl font-black text-ghost hover:text-cyan transition-colors cursor-pointer uppercase tracking-tighter">hello@zeropixels.io</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-cyan font-black mb-2">Locate</p>
                            <p className="text-3xl font-black text-ghost uppercase tracking-tighter italic">Global Presence</p>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-8 bg-white/[0.02] p-12 rounded-sm backdrop-blur-3xl border border-ghost/[0.05] hover:border-purple/30 transition-all duration-700"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.5em] text-purple font-black ml-1">Identity</label>
                            <input
                                type="text"
                                className="w-full bg-obsidian/50 border border-ghost/10 rounded-sm px-6 py-4 text-ghost placeholder:text-ghost/10 focus:outline-none focus:border-cyan/50 transition-all font-light"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.5em] text-purple font-black ml-1">Frequency</label>
                            <input
                                type="email"
                                className="w-full bg-obsidian/50 border border-ghost/10 rounded-sm px-6 py-4 text-ghost placeholder:text-ghost/10 focus:outline-none focus:border-cyan/50 transition-all font-light"
                                placeholder="name@domain.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.5em] text-purple font-black ml-1">Objective</label>
                        <select className="w-full bg-obsidian/50 border border-ghost/10 rounded-sm px-6 py-4 text-ghost focus:outline-none focus:border-cyan/50 transition-all appearance-none font-light cursor-pointer">
                            <option className="bg-obsidian">Visual Strategy</option>
                            <option className="bg-obsidian">Digital Production</option>
                            <option className="bg-obsidian">Brand Narrative</option>
                        </select>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.5em] text-purple font-black ml-1">Signal</label>
                        <textarea
                            rows="4"
                            className="w-full bg-obsidian/50 border border-ghost/10 rounded-sm px-6 py-4 text-ghost placeholder:text-ghost/10 focus:outline-none focus:border-cyan/50 transition-all font-light"
                            placeholder="Transmission details..."
                        />
                    </div>
                    <button className="group relative w-full py-5 bg-purple overflow-hidden transition-all duration-500">
                        <div className="absolute inset-0 bg-cyan translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                        <span className="relative z-10 text-ghost font-black uppercase tracking-[0.5em] text-xs transition-colors group-hover:text-obsidian">
                            Transmit Message
                        </span>
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
