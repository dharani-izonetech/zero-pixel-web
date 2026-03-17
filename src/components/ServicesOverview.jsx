import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Mountain, Baby, Heart, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
    const services = [
        {
            title: "Wedding",
            description: "Capturing the timeless elegance and raw emotions of your special day.",
            icon: Heart,
            link: "/services#wedding"
        },
        {
            title: "Corporate Events",
            description: "Professional visual coverage for conferences and corporate gatherings.",
            icon: Briefcase,
            link: "/services#corporate"
        },
        {
            title: "Promotion",
            description: "Strategic brand storytelling through high-impact photography.",
            icon: Target,
            link: "/services#promotion"
        },
        {
            title: "Baby Shower",
            description: "Capturing the joy and anticipation of welcoming new life.",
            icon: Baby,
            link: "/services#babyshower"
        },
        {
            title: "Indoor",
            description: "Studio-quality lighting and composed settings for elegant portraits.",
            icon: Camera,
            link: "/services#indoor"
        },
        {
            title: "Outdoor",
            description: "Harnessing natural light and stunning landscapes for dynamic shots.",
            icon: Mountain,
            link: "/services#outdoor"
        },
        {
            title: "Drone",
            description: "Breathtaking aerial perspectives that tell a grander story.",
            icon: Video,
            link: "/services#drone"
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
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-obsidian/50 border border-emerald/10 p-8 rounded hover:border-amber/50 transition-colors duration-500 flex flex-col items-center text-center h-full"
                            >
                                <div className="p-4 rounded-full bg-forest/80 mb-6 group-hover:scale-110 transition-transform duration-500 ring-1 ring-emerald/20">
                                    <Icon className="w-8 h-8 text-emerald group-hover:text-amber transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-serif tracking-wide uppercase mb-4 text-ghost">{service.title}</h3>
                                <p className="text-ghost/60 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                                <Link
                                    to={service.link}
                                    className="mt-auto text-xs uppercase tracking-[0.2em] text-emerald hover:text-amber transition-colors duration-300 flex items-center gap-2"
                                >
                                    Explore <span className="block w-4 h-[1px] bg-current transition-all duration-300 group-hover:w-8" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
