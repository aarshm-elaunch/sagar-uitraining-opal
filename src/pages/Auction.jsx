import React from 'react';
import '../components/auction/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import AuctionSection from '../components/auction/AuctionSection';
import Banner from '../components/auction/Banner';

const Auction = () => {
    return (
        <Box>
            <Banner />
            <AuctionSection />
            <MainFooter />
        </Box>
    );
}

export default Auction;
