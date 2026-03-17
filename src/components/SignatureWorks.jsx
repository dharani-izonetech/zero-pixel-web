import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Image Imports
import image1 from '../assets/images/2026-website-photos/AJAP8615_RNS_RNS1.jpg';
import image2 from '../assets/images/2026-website-photos/birthday/003.jpg';
import image3 from '../assets/images/2026-website-photos/Drone/003 copy.jpg';
import image4 from '../assets/images/2026-website-photos/indoor/001.jpg';
import image5 from '../assets/images/2026-website-photos/outdoor/8V3A1586 copy.jpg';

gsap.registerPlugin(ScrollTrigger);

const SignatureWorks = () => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !triggerRef.current) return;

        const sections = gsap.utils.toArray('.work-item');
        if (sections.length === 0) return;

        let ctx = gsap.context(() => {
            // ✅ Only slide the panels horizontally — NO image x-shift (that caused black gaps)
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        duration: { min: 0.3, max: 0.6 },
                        ease: "power1.inOut",
                    },
                    start: "top top",
                    // ✅ Correct end: scroll distance = (n-1) slides × 100vw
                    end: () => `+=${window.innerWidth * (sections.length - 1)}`,
                    invalidateOnRefresh: true,
                }
            });

            // ✅ Only animate the title — no image movement at all
            sections.forEach((section) => {
                const title = section.querySelector('.work-title');
                if (title) {
                    gsap.fromTo(title,
                        { opacity: 0.4, y: 30 },
                        {
                            opacity: 0.85,
                            y: 0,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                containerAnimation: gsap.getTweensOf(sections)[0],
                                start: "left center",
                                end: "center center",
                                scrub: true,
                            }
                        }
                    );
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const works = [
        {
            title: "Forever Begins",
            category: "Wedding",
            image: image1,
            position: "50% 30%"
        },
        {
            title: "Joyful Celebration",
            category: "Birthday",
            image: image2,
            position: "50% 20%"
        },
        {
            title: "Skyline Perspectives",
            category: "Drone",
            image: image3,
            position: "50% 50%"
        },
        {
            title: "Elegant Moments",
            category: "Indoor",
            image: image4,
            position: "50% 20%"
        },
        {
            title: "Nature Frames",
            category: "Outdoor",
            image: image5,
            position: "50% 40%"
        }
    ];

    return (
        <section
            id="works"
            ref={triggerRef}
            style={{
                background: '#000',
                overflow: 'hidden',
            }}
        >
            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    width: `${works.length * 100}vw`,
                    height: '100vh',
                }}
            >
                {works.map((work, index) => (
                    <div
                        key={index}
                        className="work-item"
                        style={{
                            position: 'relative',
                            width: '100vw',
                            height: '100vh',
                            flexShrink: 0,
                            overflow: 'hidden',
                            background: '#000',
                        }}
                    >
                        {/*
                            ✅ IMAGE: absolute inset-0, w-full h-full, object-cover
                            — fills every pixel of the 100vw × 100vh slide
                            — NO transform, NO x-shift, NO scale
                            — object-position focuses on face/subject
                            — Result: full crisp image, zero black bars on any side
                        */}
                        <img
                            src={work.image}
                            alt={work.title}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: work.position,
                                display: 'block',
                                // ✅ No transform here — prevents any gap/shift
                            }}
                        />

                        {/* Gradient overlay for text readability only — no blur, no color */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0.05) 100%)',
                                pointerEvents: 'none',
                            }}
                        />

                        {/* Text content */}
                        <div
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                padding: '0 1.5rem',
                            }}
                        >
                            <p
                                style={{
                                    marginBottom: '1.5rem',
                                    color: '#5a9e7c',
                                    fontWeight: 300,
                                    letterSpacing: '0.4em',
                                    textTransform: 'uppercase',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {work.category}
                            </p>

                            <h2
                                className="work-title"
                                style={{
                                    fontSize: 'clamp(2.5rem, 9vw, 10rem)',
                                    fontFamily: 'serif',
                                    fontWeight: 300,
                                    letterSpacing: '0.04em',
                                    textTransform: 'capitalize',
                                    lineHeight: 1,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: '0 1.5rem',
                                    opacity: 0.85,
                                }}
                            >
                                {work.title.split(' ').map((word, i) => (
                                    <span
                                        key={i}
                                        style={{ display: 'inline-block', overflow: 'hidden' }}
                                    >
                                        <motion.span
                                            initial={{ y: '100%', skewY: 8 }}
                                            whileInView={{ y: 0, skewY: 0 }}
                                            viewport={{ once: false, amount: 0.1 }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.16, 1, 0.3, 1],
                                                delay: i * 0.1,
                                            }}
                                            style={{
                                                display: 'inline-block',
                                                color: i % 2 !== 0 ? '#c9a84c' : '#f0ece4',
                                                fontStyle: i % 2 !== 0 ? 'italic' : 'normal',
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </h2>
                        </div>

                        {/* Slide index number */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '5rem',
                                right: '5rem',
                                zIndex: 20,
                                lineHeight: 1,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 'clamp(4rem, 8vw, 8rem)',
                                    fontFamily: 'serif',
                                    fontWeight: 300,
                                    color: 'rgba(90,158,124,0.15)',
                                    fontStyle: 'italic',
                                    userSelect: 'none',
                                }}
                            >
                                0{index + 1}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SignatureWorks;