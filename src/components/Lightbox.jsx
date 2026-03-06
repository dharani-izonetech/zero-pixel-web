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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-sm"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 text-ghost/70 hover:text-amber transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onNavigate('prev') }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 text-ghost/50 hover:text-amber transition-colors"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    {/* Navigation Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onNavigate('next') }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 text-ghost/50 hover:text-amber transition-colors"
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
