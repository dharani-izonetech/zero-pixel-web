import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SignatureWorks = () => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !triggerRef.current) return;

        const sections = gsap.utils.toArray('.work-item');
        if (sections.length === 0) return;

        let ctx = gsap.context(() => {
            // High-Performance Horizontal Scroll
            const horizontalTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    start: "top top",
                    end: () => "+=" + containerRef.current.offsetWidth,
                    invalidateOnRefresh: true,
                }
            });

            // Coordinated Parallax
            sections.forEach((section) => {
                const img = section.querySelector('.parallax-img');
                const title = section.querySelector('.work-title');

                gsap.to(img, {
                    x: 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: horizontalTween,
                        start: "left right",
                        end: "right left",
                        scrub: true
                    }
                });

                gsap.to(title, {
                    scale: 1.1,
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: horizontalTween,
                        start: "left center",
                        end: "center center",
                        scrub: true
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const works = [
        {
            title: "Eternal Vows",
            category: "Wedding",
            image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2069"
        },
        {
            title: "Corporate Vision",
            category: "Business",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=2069"
        },
        {
            title: "Brand Anthem",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80&w=2070"
        },
        {
            title: "Candid Grace",
            category: "Portraits",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    return (
        <section id="works" ref={triggerRef} className="overflow-hidden bg-forest">
            <div ref={containerRef} className="flex h-screen w-[400vw]">
                {works.map((work, index) => (
                    <div
                        key={index}
                        className="work-item relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={work.image}
                                alt={work.title}
                                className="parallax-img w-[140%] h-full object-cover scale-110"
                            />
                            <div className="absolute inset-0 bg-forest/20 backdrop-blur-[2px]" />
                        </div>

                        <div className="relative z-10 text-center px-6">
                            <p className="cinematic-text mb-6 text-emerald font-light tracking-[0.4em] uppercase text-sm">{work.category}</p>
                            <h2 className="work-title text-6xl md:text-[10rem] font-serif font-light tracking-wide capitalize leading-[1] flex flex-wrap justify-center overflow-hidden opacity-70">
                                {work.title.split(' ').map((word, i) => (
                                    <span key={i} className="inline-block overflow-hidden mr-8 last:mr-0">
                                        <motion.span
                                            initial={{ y: "100%", skewY: 10 }}
                                            whileInView={{ y: 0, skewY: 0 }}
                                            viewport={{ once: false, amount: 0.1 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: [0.16, 1, 0.3, 1],
                                                delay: i * 0.1
                                            }}
                                            className={`inline-block ${i % 2 !== 0 ? 'text-amber italic font-serif' : 'text-ghost font-serif'}`}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </h2>
                        </div>

                        <div className="absolute top-24 right-24 z-20">
                            <span className="text-[8rem] font-serif font-light text-emerald/20 italic select-none">0{index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SignatureWorks;
