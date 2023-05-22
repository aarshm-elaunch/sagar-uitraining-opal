import React from 'react';
import { Box, Container, Divider, Grid } from '@mui/material';
import product_img from '../../assets/images/product2.png'
import Reviews from './Reviews';
import Shipping from '../auctiondetail/Shipping';
import ItemDetail from './ItemDetail';
import DetailHeader from './DetailHeader';
import Price from './Price';
import ImageSlider from './ImageSlider';
import ImageList from './ImageList';

const ProductDetail = () => {
    return (
        <Box className='productdetail_wrapper'>
            <Box className='productdetail'>
                <Container sx={{ minWidth: '80%' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={4}>
                            <ImageSlider />
                            <ImageList />
                        </Grid>
                        <Grid item xs={4} sm={4} md={8}>
                            <DetailHeader />
                            <Divider />
                            <Price />
                            <ItemDetail />
                            <Shipping />
                            <h2>Reviews</h2>
                            <Reviews />
                            <Reviews />
                            <Reviews />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default ProductDetail;