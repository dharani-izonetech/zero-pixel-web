import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const serviceDetails = [
        {
            id: "babyshower",
            title: "Baby Shower",
            description: "Celebrate the arrival of new life with our specialized baby shower photography. We focus on capturing genuine emotions, the meticulously planned details, and the joyous interactions between family and friends.",
            features: ["Pre-event consultation", "2-4 hours coverage", "Online private gallery", "High-res edited images"],
            image: "/src/assets/images/2026 website photos/babyshower/DSC09457 copy.jpg",
            reverse: false
        },
        {
            id: "birthday",
            title: "Birthday",
            description: "From intimate gatherings to grand milestone celebrations, our birthday photography preserves the laughter, the surprises, and the unforgettable moments that define the special day.",
            features: ["Candid & structured shots", "Event coverage", "Rapid delivery", "Custom albums available"],
            image: "/src/assets/images/2026 website photos/birthday/004.jpg",
            reverse: true
        },
        {
            id: "drone",
            title: "Drone",
            description: "Elevate your visual storytelling with our professional drone photography. Perfect for large-scale events, real estate, and cinematic landscape perspectives that cannot be captured from the ground.",
            features: ["4K Video capabilities", "Licensed operators", "Unique aerial angles", "Dynamic fly-throughs"],
            image: "/src/assets/images/2026 website photos/Drone/003 copy.jpg",
            reverse: false
        },
        {
            id: "indoor",
            title: "Indoor",
            description: "Our indoor sessions utilize professional studio lighting or masterful manipulation of natural window light to create elegant, timeless portraits in a controlled environment.",
            features: ["Studio setups", "Backdrop selections", "Professional lighting", "Creative direction"],
            image: "/src/assets/images/2026 website photos/indoor/002.jpg",
            reverse: true
        },
        {
            id: "outdoor",
            title: "Outdoor",
            description: "Immerse your subjects in nature. We specialize in finding the perfect locations and utilizing the natural 'golden hour' light to create breathtaking, dynamic outdoor portraits.",
            features: ["Location scouting", "Natural lighting mastery", "Action shots", "Environmental portraits"],
            image: "/src/assets/images/2026 website photos/outdoor/001 copy.jpg",
            reverse: false
        }
    ];

    return (
        <main className="min-h-screen bg-obsidian text-ghost pt-32 pb-24">
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
                        className={`flex flex-col md:flex-row gap-12 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Image Container */}
                        <div className="w-full md:w-1/2 relative group">
                            <motion.div
                                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative overflow-hidden rounded overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-forest/20 mix-blend-overlay"></div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`absolute -bottom-6 ${service.reverse ? '-left-6' : '-right-6'} w-32 h-32 border border-amber/30 -z-10`}
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
                                    to={`/portfolio`} // Could link to specific filtered portfolio in future
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
                    <h3 className="text-3xl font-serif text-ghost mb-4">Ready to start?</h3>
                    <p className="text-ghost/60 mb-8 max-w-lg mx-auto">Contact us today to discuss your vision and see how we can bring it to life.</p>
                    <Link to="/contact" className="px-8 py-3 bg-amber text-obsidian font-serif tracking-widest uppercase text-sm hover:bg-emerald transition-colors duration-300">
                        Book Now
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};

export default ServicesPage;
