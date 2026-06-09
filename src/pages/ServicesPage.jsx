import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Image Imports
import weddingImg from '../assets/images/2026-website-photos/8K4A8926 copy.jpg';
import corporateImg from '../assets/images/2026-website-photos/corporate.jpeg';
import promotionImg from '../assets/images/2026-website-photos/ZPS21698.jpg';
import babyShowerImg from '../assets/images/2026-website-photos/babyshower/DSC09457 copy.jpg';
import indoorImg from '../assets/images/2026-website-photos/indoor/002.jpg';
import outdoorImg from '../assets/images/2026-website-photos/outdoor/001 copy.jpg';
import droneImg from '../assets/images/2026-website-photos/Drone/003 copy.jpg';

const ServicesPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                // Wait a bit for the page to re    nder and Lenis to initialize if needed
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const serviceDetails = [
        {
            id: "wedding",
            title: "Wedding",
            description: "Capturing the timeless elegance and raw emotions of your special day. From the first look to the final dance, we document every precious chapter of your love story.",
            features: ["Full day coverage", "Engagement session", "Fine art editing", "Luxury wedding album"],
            image: weddingImg,
            reverse: false
        },
        {
            id: "corporate",
            title: "Corporate Events",
            description: "Professional visual coverage for conferences, summits, and corporate gatherings. We capture the energy, networking, and key moments that define your business success.",
            features: ["Event documentation", "Speaker portraits", "Rapid turnaround", "Commercial usage rights"],
            image: corporateImg,
            reverse: true
        },
        {
            id: "promotion",
            title: "Promotion",
            description: "Strategic brand storytelling through high-impact photography. Perfect for product launches, marketing campaigns, and elevating your professional identity.",
            features: ["Personal branding", "Social media content", "Marketing focus", "Creative art direction"],
            image: promotionImg,
            reverse: false
        },
        {
            id: "babyshower",
            title: "Baby Shower",
            description: "Celebrate the arrival of new life with our specialized baby shower photography. We focus on capturing genuine emotions, the meticulously planned details, and the joyous interactions between family and friends.",
            features: ["Pre-event consultation", "2-4 hours coverage", "Online private gallery", "High-res edited images"],
            image: babyShowerImg,
            reverse: true
        },
        {
            id: "indoor",
            title: "Indoor",
            description: "Our indoor sessions utilize professional studio lighting or masterful manipulation of natural window light to create elegant, timeless portraits in a controlled environment.",
            features: ["Studio setups", "Backdrop selections", "Professional lighting", "Creative direction"],
            image: indoorImg,
            reverse: false
        },
        {
            id: "outdoor",
            title: "Outdoor",
            description: "Immerse your subjects in nature. We specialize in finding the perfect locations and utilizing the natural 'golden hour' light to create breathtaking, dynamic outdoor portraits.",
            features: ["Location scouting", "Natural lighting mastery", "Action shots", "Environmental portraits"],
            image: outdoorImg,
            reverse: true
        },
        {
            id: "drone",
            title: "Drone",
            description: "Elevate your visual storytelling with our professional drone photography. Perfect for large-scale events, real estate, and cinematic landscape perspectives that cannot be captured from the ground.",
            features: ["4K Video capabilities", "Licensed operators", "Unique aerial angles", "Dynamic fly-throughs"],
            image: droneImg,
            reverse: false
        }
    ];

    return (
        <motion.main 
            className="min-h-screen bg-obsidian text-ghost pt-32 pb-24 overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <header className="text-center px-6 mb-24 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-8"
                >
                    Exquisite <span className="text-amber italic">Services</span>
                </motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-24 h-[1px] bg-emerald mx-auto mb-8"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-ghost/70 text-lg font-light leading-relaxed"
                >
                    We offer a comprehensive suite of photography services tailored to meet your unique needs. Whether it's the intimacy of a studio portrait or the grand scale of an aerial drone shot, we bring the same level of artistic obsession to every project.
                </motion.p>
            </header>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
                {serviceDetails.map((service, index) => (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`flex flex-col md:flex-row gap-12 items-center overflow-hidden ${service.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Image Container */}
                        <div className="w-full md:w-1/2 relative group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative overflow-hidden rounded aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-black"
                            >
                                {service.id === 'promotion' ? (
                                    <div
                                        className="w-full h-full cursor-pointer relative"
                                        onClick={() => window.open('https://www.youtube.com/watch?v=L9Q5F3tYmc4', '_blank')}
                                    >
                                        <img
                                            src="https://img.youtube.com/vi/L9Q5F3tYmc4/maxresdefault.jpg"
                                            alt="Promotion Video"
                                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://img.youtube.com/vi/L9Q5F3tYmc4/0.jpg';
                                            }}
                                        />
                                        {/* Hover overlay and Play button */}
                                        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-amber/90 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-amber/20 z-10">
                                                <svg className="w-6 h-6 text-obsidian fill-obsidian ml-1" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* Hover caption - matching Portfolio's VideoCard style */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 text-left">
                                            <p className="text-ghost font-serif italic text-sm">Luxury Property Showcase</p>
                                            <p className="text-amber/80 text-[10px] uppercase tracking-widest mt-1">Real Estate Promotion</p>
                                        </div>
                                        <div className="absolute inset-0 bg-forest/20 mix-blend-overlay"></div>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-forest/20 mix-blend-overlay"></div>
                                    </>
                                )}
                            </motion.div>

                            {/* Decorative Elements - hidden on mobile to prevent overflow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`hidden md:block absolute -bottom-6 ${service.reverse ? '-left-3' : '-right-3'} w-24 h-24 border border-amber/30 -z-10`}
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className={`absolute top-1/2 -translate-y-1/2 ${service.reverse ? '-right-12' : '-left-12'} hidden lg:block`}
                            >
                                <span className="text-[12rem] font-serif font-light text-ghost/[0.03] select-none leading-none">
                                    0{index + 1}
                                </span>
                            </motion.div>
                        </div>

                        {/* Text Container */}
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-serif tracking-wide uppercase text-ghost mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-ghost/70 leading-relaxed font-light mb-8">
                                    {service.description}
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-sm uppercase tracking-widest text-ghost/90">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald mr-4 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/portfolio"
                                    state={{ category: service.title }}
                                    className="inline-flex items-center gap-3 text-emerald uppercase tracking-widest text-sm hover:text-amber transition-colors duration-300 group"
                                >
                                    View Examples
                                    <span className="w-12 h-[1px] bg-emerald group-hover:bg-amber transition-colors duration-300 group-hover:w-16"></span>
                                </Link>
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-32 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-12 border border-emerald/20 bg-forest/10 rounded-lg relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-3xl font-serif text-ghost mb-4 relative z-10">Ready to start?</h3>
                    <p className="text-ghost/60 mb-8 max-w-lg mx-auto relative z-10">Contact us today to discuss your vision and see how we can bring it to life.</p>
                    <Link to="/contact" className="inline-block relative z-10 px-8 py-3 bg-amber text-obsidian font-serif tracking-widest uppercase text-sm hover:bg-emerald transition-colors duration-300">
                        Book Now
                    </Link>
                </motion.div>
            </div>
        </motion.main>
    );
};

export default ServicesPage;
