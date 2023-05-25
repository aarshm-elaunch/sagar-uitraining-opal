import React from 'react';
import '../components/podcasts/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import PodcastSection from '../components/podcasts/PodcastSection';
import bg_image from '../assets/images/podcast_banner.png';
import Banner from '../components/common/Banner';

const Podcast = () => {
    return (
        <Box>
            <Banner bg_image={bg_image} title='Podcasts' />
            <PodcastSection />
            <MainFooter />
        </Box>
    );
}

export default Podcast;
