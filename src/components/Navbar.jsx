import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/2026-website-photos/zero-pixel-icon.jpg.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const location = useLocation();

    const scaleX = useSpring(scrollYProgress, {
        stiff: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${scrolled ? 'py-4 bg-obsidian/90 backdrop-blur-md border-b border-purple/10' : 'py-8 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center text-purple">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="h-[3.5rem] bg-black flex items-center justify-center overflow-hidden rounded-[12px] border border-ghost/5 shadow-2xl"
                        >
                            <img src={logo} alt="ZEROPIXEL" className="h-full w-auto object-contain" />
                        </motion.div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-amber' : 'text-ghost/60 hover:text-amber'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-amber"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-purple relative z-[110]">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Scroll Progress */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-amber shadow-[0_0_10px_#fbbf24]"
                    style={{ scaleX, originX: 0 }}
                />
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[105] bg-obsidian pt-32 px-6 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-4xl font-serif tracking-widest uppercase transition-colors ${isActive ? 'text-amber italic' : 'text-ghost hover:text-amber'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
