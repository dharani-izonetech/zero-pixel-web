import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Mountain, Baby, Heart, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
    const services = [
        {
            title: "Wedding & Candid",
            description: "Cinematic wedding storytelling, capturing every candid moment with artistic precision.",
            icon: Heart,
            link: "/services#wedding"
        },
        {
            title: "Pre & Post Wedding",
            description: "Beautifully choreographed shoots in stunning locations to celebrate your love story.",
            icon: Camera,
            link: "/services#wedding"
        },
        {
            title: "Cinematography",
            description: "High-end motion picture coverage that turns your events into cinematic masterpieces.",
            icon: Video,
            link: "/services#wedding"
        },
        {
            title: "Newborn & Baby",
            description: "Gentle and creative photography capturing the earliest milestones of your little ones.",
            icon: Baby,
            link: "/services#babyshower"
        },
        {
            title: "Maternity",
            description: "Graceful portraits celebrating the beauty and journey of motherhood.",
            icon: Target,
            link: "/services#babyshower"
        },
        {
            title: "Model & Product",
            description: "Professional portfolio shoots and high-impact commercial product photography.",
            icon: Briefcase,
            link: "/services#promotion"
        },
        {
            title: "Drone Coverage",
            description: "Epic aerial perspectives for a truly grand view of your celebrations.",
            icon: Mountain,
            link: "/services#drone"
        },
        {
            title: "Live Streaming",
            description: "Real-time high-quality streaming services for weddings and events worldwide.",
            icon: Target,
            link: "/services#corporate"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-24 bg-forest text-ghost px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-4"
                    >
                        Our <span className="text-amber italic">Services</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-24 h-[1px] bg-emerald mx-auto mb-6 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-ghost/70 uppercase tracking-[0.2em] text-sm max-w-2xl mx-auto"
                    >
                        Mastering light and shadow across every discipline
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                to={service.link}
                                className="block h-full no-underline"
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="group relative bg-obsidian/50 border-2 border-emerald/30 p-8 rounded hover:border-amber/50 transition-colors duration-500 flex flex-col items-center text-center h-full cursor-pointer"
                                >
                                    <div className="p-4 rounded-full bg-forest/80 mb-6 group-hover:scale-110 transition-transform duration-500 ring-1 ring-emerald/20">
                                        <Icon className="w-8 h-8 text-emerald group-hover:text-amber transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-serif tracking-wide uppercase mb-4 text-ghost">{service.title}</h3>
                                    <p className="text-ghost/60 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                                    <div
                                        className="mt-auto text-xs uppercase tracking-[0.2em] text-emerald group-hover:text-amber transition-colors duration-300 flex items-center gap-2"
                                    >
                                        Explore <span className="block w-4 h-[1px] bg-current transition-all duration-300 group-hover:w-8" />
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
