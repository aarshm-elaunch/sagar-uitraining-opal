import React from 'react';
import '../components/about/style.scss';
import MainFooter from '../Layouts/MainFooter';
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';
import bg_image from '../assets/images/background_image.png';
import Banner from '../components/common/Banner';
import { Box } from '@mui/material';

const About = () => {
    return (
        <Box>
            <Banner bg_image={bg_image} title='About us' />
            {/* <FirstSection /> */}
            <SecondSection />
            <MainFooter />
        </Box>
    );
}

export default About;
