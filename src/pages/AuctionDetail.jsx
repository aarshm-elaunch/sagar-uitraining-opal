import React from 'react';
import '../components/auctiondetail/style.scss';
import { Box } from '@mui/material';
import Auction from '../components/auctiondetail'
import MainFooter from '../Layouts/MainFooter';

const AuctionDetail = () => {
    return (
        <Box>
            <Auction />
            <MainFooter />
        </Box>
    );
}

export default AuctionDetail;
