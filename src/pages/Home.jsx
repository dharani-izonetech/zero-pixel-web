import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import SignatureWorks from '../components/SignatureWorks';
import FeaturedPortfolio from '../components/FeaturedPortfolio';
import ServicesOverview from '../components/ServicesOverview';
import ClientExperience from '../components/ClientExperience';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <Story />
            <SignatureWorks />
            <FeaturedPortfolio />
            <ServicesOverview />
            <ClientExperience />
            <CTA />
        </main>
    );
};

export default Home;
