import React from 'react';
import { Box } from '@mui/material';
import '../components/productdetail/style.scss';
import MainFooter from '../Layouts/MainFooter';
import ProductDetail from '../components/productdetail';

const ProductDetails = () => {
    return (
        <Box>
            <ProductDetail />
            <MainFooter />
        </Box>
    );
}

export default ProductDetails;
