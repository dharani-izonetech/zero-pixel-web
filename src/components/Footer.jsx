import React from 'react';
import { Camera, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-obsidian border-t border-purple/10 py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <div className="space-y-8 max-w-sm">
                        <div className="flex items-center gap-2 text-purple">
                            <Camera className="w-6 h-6" />
                            <span className="text-xl font-bold tracking-tighter uppercase">ZERO PIXELS</span>
                        </div>
                        <p className="text-ghost/60 font-light-500 leading-relaxed">
                            Breaking the boundaries of visual excellence. Digital-first, Soul-driven. Worldwide.
                        </p>
                        <div className="flex gap-6">
                            <Instagram className="w-5 h-5 text-purple/60 hover:text-cyan transition-colors cursor-pointer" />
                            <Twitter className="w-5 h-5 text-purple/60 hover:text-cyan transition-colors cursor-pointer" />
                            <Linkedin className="w-5 h-5 text-purple/60 hover:text-cyan transition-colors cursor-pointer" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-purple">Studio</p>
                            <ul className="space-y-4 text-sm text-ghost/60 font-light-500">
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">About</li>
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Portfolio</li>
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Journal</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-purple">Services</p>
                            <ul className="space-y-4 text-sm text-ghost/60 font-light-500">
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Editorial</li>
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Commercial</li>
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Prints</li>
                            </ul>
                        </div>
                        <div className="hidden md:block space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-purple">Legal</p>
                            <ul className="space-y-4 text-sm text-ghost/60 font-light-500">
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Privacy</li>
                                <li className="hover:text-cyan transition-colors cursor-pointer underline-offset-4 hover:underline">Terms</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-purple/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-ghost/60">
                        © 2026 ZERO PIXELS STUDIO. ALL RIGHTS RESERVED.
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
