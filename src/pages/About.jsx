import React from 'react';
import '../components/about/style.scss';
import MainFooter from '../Layouts/MainFooter';
import Banner from '../components/about/Banner';
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';

const About = () => {
    return (
        <>
            <Banner />
            {/* <FirstSection /> */}
            <SecondSection />
            <MainFooter />
        </>
    );
}

export default About;
