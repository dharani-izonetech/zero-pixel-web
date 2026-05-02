import { Link } from 'react-router-dom';
import { Camera, Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/images/2026-website-photos/zero-pixel-icon.jpg';

const Footer = () => {
    return (
        <footer className="bg-obsidian border-t border-purple/10 py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <div className="space-y-8 max-w-sm">
                        <div className="flex items-center text-purple">
                            <Link to="/" className="h-[3.5rem] bg-black flex items-center justify-center overflow-hidden rounded-[12px] border border-ghost/5 shadow-2xl hover:border-purple/30 transition-all">
                                <img src={logo} alt="ZEROPIXEL" className="h-full w-auto object-contain" />
                            </Link>
                        </div>
                        <p className="text-ghost/60 font-light-500 leading-relaxed">
                            Breaking the boundaries of visual excellence. Digital-first, Soul-driven. Worldwide.
                        </p>
                        <div className="space-y-1">
                            <p className="text-xs text-ghost/40 uppercase tracking-widest font-bold mb-2">Location</p>
                            <p className="text-sm text-ghost/80">Karumandapam & LIC Colony</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-ghost/40 uppercase tracking-widest font-bold mb-2">Connect</p>
                            <p className="text-sm text-ghost/80">+91 80 566 36662 | 90 925 36662</p>
                        </div>
                        <div className="flex gap-6 pt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple/60 hover:text-amber transition-colors">
                                <Instagram className="w-5 h-5 pointer-events-none" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple/60 hover:text-amber transition-colors">
                                <Twitter className="w-5 h-5 pointer-events-none" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple/60 hover:text-amber transition-colors">
                                <Linkedin className="w-5 h-5 pointer-events-none" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16 md:gap-32">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-purple">Studio</p>
                            <ul className="space-y-4 text-sm text-ghost/60 font-light-500">
                                <li><Link to="/" className="hover:text-amber transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-amber transition-colors">About</Link></li>
                                <li><Link to="/portfolio" className="hover:text-amber transition-colors">Portfolio</Link></li>
                                <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-purple">Services</p>
                            <ul className="space-y-4 text-sm text-ghost/60 font-light-500">
                                <li><Link to="/services#wedding" className="hover:text-amber transition-colors">Wedding</Link></li>
                                <li><Link to="/services#corporate" className="hover:text-amber transition-colors">Corporate Events</Link></li>
                                <li><Link to="/services#promotion" className="hover:text-amber transition-colors">Promotion</Link></li>
                                <li><Link to="/services#babyshower" className="hover:text-amber transition-colors">Baby Shower</Link></li>
                                <li><Link to="/services#indoor" className="hover:text-amber transition-colors">Indoor</Link></li>
                                <li><Link to="/services#outdoor" className="hover:text-amber transition-colors">Outdoor</Link></li>
                                <li><Link to="/services#drone" className="hover:text-amber transition-colors">Drone</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="mt-24 pt-8 border-t border-purple/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-ghost/60">
                        © 2026 ZEROPIXEL STUDIO. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-ghost/60">
                        CRAFTED FOR THE FUTURE
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
