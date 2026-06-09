import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Story from '../components/Story';
import SignatureWorks from '../components/SignatureWorks';
import FeaturedPortfolio from '../components/FeaturedPortfolio';
import VideoPromotion from '../components/VideoPromotion';
import ServicesOverview from '../components/ServicesOverview';
import ClientExperience from '../components/ClientExperience';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <Story />
            <SignatureWorks />
            <FeaturedPortfolio />
            <VideoPromotion />
            <ServicesOverview />
            <ClientExperience />
            <CTA />
        </motion.main>
    );
};

export default Home;
