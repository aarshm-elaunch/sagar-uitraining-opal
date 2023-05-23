import React from 'react';
import '../components/wishlist/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import WishListed from '../components/wishlist/WishListed';

const WishList = () => {
    return (
        <Box>
            <WishListed />
            <MainFooter />
        </Box>
    );
}

export default WishList;
