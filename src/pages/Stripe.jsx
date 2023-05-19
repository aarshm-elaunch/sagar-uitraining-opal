import React from 'react';
import '../components/stripe/style.scss'
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import Striped from '../components/stripe/Striped';

const Stripe = () => {
    return (
        <Box>
            <Striped />
            <MainFooter />
        </Box>
    );
}

export default Stripe;
