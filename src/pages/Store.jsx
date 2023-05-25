import React from 'react';
import '../components/store/style.scss';
import { Box } from '@mui/material';
import Stores from '../components/store/Stores';
import MainFooter from '../Layouts/MainFooter';
import Banner from '../components/common/Banner';
import bg_image from '../assets/images/store_banner.png'; 

const Store = () => {
    return (
        <Box>
            <Banner bg_image={bg_image} title='Stores' />
            <Stores />
            <MainFooter />
        </Box>
    );
}

export default Store;
