import React from 'react';
import '../components/products/style.scss'
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import Products from '../components/products/Products';

const Product = () => {
    return (
        <Box>
            <Products />
            <MainFooter />
        </Box>
    );
}

export default Product;
