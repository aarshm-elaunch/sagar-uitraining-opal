import React from 'react';
import '../components/checkout/style.scss'
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import Chekout from '../components/checkout';

const Checkout = () => {
    return (
        <Box>
            <Chekout />
            <MainFooter />
        </Box>
    );
}

export default Checkout;
