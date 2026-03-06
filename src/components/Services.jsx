import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image, Video, Palette } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Editorial",
            desc: "Cinematic storytelling for high-end fashion and lifestyle publications."
        },
        {
            icon: <Image className="w-8 h-8" />,
            title: "Fine Art",
            desc: "Limited edition prints and custom artistic commissions for private galleries."
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "Motion",
            desc: "Short-form cinematic films and commercial brand narratives."
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Retouching",
            desc: "Masterful post-production to preserve the soul of every image."
        }
    ];

    return (
        <section id="services" className="section-padding bg-obsidian border-y border-purple/10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl"
                >
                    <p className="cinematic-text mb-6 text-emerald font-light tracking-[0.4em]">Expertise</p>
                    <h2 className="text-6xl md:text-8xl text-ink font-serif font-light tracking-wide capitalize leading-[1]">
                        Visual <br />
                        <span className="text-emerald italic">Excellence</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-md text-ink/70 text-lg font-light leading-relaxed text-right font-serif"
                >
                    We provide high-end photography services tailoring beautiful, unforgettable moments into timeless art. Your story, beautifully captured.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            delay: i * 0.1
                        }}
                        className="group relative bg-white/40 backdrop-blur-md p-12 border border-ink/10 hover:border-emerald transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl rounded-lg"
                    >
                        <div className="mb-10 text-emerald group-hover:text-cyan transition-colors transform group-hover:scale-110 duration-500">
                            {service.icon}
                        </div>
                        <h3 className="text-3xl font-serif font-light mb-6 tracking-wide text-ink capitalize">{service.title}</h3>
                        <p className="text-ink/70 group-hover:text-ink transition-colors leading-relaxed font-light">
                            {service.desc}
                        </p>

                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 bg-emerald rounded-full" />
                        </div>

                        <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-emerald/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
