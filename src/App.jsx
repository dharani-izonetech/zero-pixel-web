import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ServicesPage from './pages/ServicesPage'
import About from './pages/About'
import ContactPage from './pages/ContactPage'

gsap.registerPlugin(ScrollTrigger)

function App() {
    const containerRef = useRef()
    const location = useLocation()

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        // Give GSAP scroll trigger lenis instances so it refreshes correctly during routing
        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        // Reset scroll position on route change
        lenis.scrollTo(0, { immediate: true })

        return () => {
            lenis.destroy()
            gsap.ticker.remove(lenis.raf)
        }
    }, [location.pathname])

    return (
        <div ref={containerRef} className="min-h-screen bg-obsidian text-ghost selection:bg-purple selection:text-ghost">
            <div className="grain" />
            <Navbar />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </div>
    )
}

export default App
