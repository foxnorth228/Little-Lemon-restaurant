import React from 'react';
import SectionHero from '../../components/section-hero/section-hero';
import SectionSpecials from '../../components/section-specials/section-specials';
import SectionTestimonials from '../../components/section-testimonials/section-testimonials';
import SectionAbout from '../../components/section-about/section-about';

const HomePage = () => {
    return (
        <>
            <SectionHero />
            <SectionSpecials />
            <SectionTestimonials />
            <SectionAbout />
        </>
    );
};

export default HomePage;
