import React from 'react';
import '../components/cart/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import CartList from '../components/cart/CartList';

const Cart = () => {
    return (
        <Box>
            <CartList />
            <MainFooter />
        </Box>
    );
}

export default Cart;
