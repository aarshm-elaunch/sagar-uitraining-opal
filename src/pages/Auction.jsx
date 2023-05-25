import React from 'react';
import '../components/auction/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import AuctionSection from '../components/auction/AuctionSection';
import Banner from '../components/common/Banner';
import bg_image from '../assets/images/auction_banner.png';

const Auction = () => {
    return (
        <Box>
            <Banner bg_image={bg_image} title='Auctions' />
            <AuctionSection />
            <MainFooter />
        </Box>
    );
}

export default Auction;
