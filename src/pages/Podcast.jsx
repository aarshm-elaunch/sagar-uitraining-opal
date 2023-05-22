import React from 'react';
import '../components/podcasts/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import Banner from '../components/podcasts/Banner';
import PodcastSection from '../components/podcasts/PodcastSection';

const Podcast = () => {
    return (
        <Box>
            <Banner />
            <PodcastSection />
            <MainFooter />
        </Box>
    );
}

export default Podcast;
