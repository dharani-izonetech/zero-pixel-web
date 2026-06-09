import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ isOpen, items, currentIndex, onClose, onNavigate }) => {

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onNavigate('prev');
            if (e.key === 'ArrowRight') onNavigate('next');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNavigate]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!items || items.length === 0) return null;

    const currentItem = items[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-obsidian/95 backdrop-blur-sm"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-[9rem] right-[3rem] z-[110] p-3 rounded-full bg-ghost/10 text-ghost hover:bg-ghost/20 hover:text-amber transition-all shadow-sm"
                        aria-label="Close"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onNavigate('prev') }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-ghost/5 text-ghost/80 hover:bg-ghost/10 hover:text-amber transition-all backdrop-blur-md"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    {/* Navigation Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onNavigate('next') }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-ghost/5 text-ghost/80 hover:bg-ghost/10 hover:text-amber transition-all backdrop-blur-md"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center p-12" onClick={onClose}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={currentItem.src}
                                alt={currentItem.title || "Portfolio Image"}
                                className="max-w-full max-h-full object-contain shadow-2xl"
                            />

                            {/* Image Info */}
                            <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                                <p className="text-ghost/80 text-sm uppercase tracking-widest font-serif">
                                    {currentItem.category && <span className="text-emerald mr-2">{currentItem.category}</span>}
                                    {currentIndex + 1} / {items.length}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
