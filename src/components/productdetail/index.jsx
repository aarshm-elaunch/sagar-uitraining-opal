import React, { useEffect, useState } from 'react';
import { Box, Container, Divider, Grid } from '@mui/material';
import Reviews from './Reviews';
import Shipping from '../auctiondetail/Shipping';
import ItemDetail from './ItemDetail';
import DetailHeader from './DetailHeader';
import Price from './Price';
import ImageSlider from './ImageSlider';
import ImageList from './ImageList';
import { useParams } from 'react-router-dom';
import { product_list } from '../../dummy_data';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();
    
    useEffect(()=>{
        product_list.map((item)=>item.id === id && setProduct(item))
    })

    return (
        <Box className='productdetail_wrapper'>
            <Box className='productdetail'>
                <Container sx={{ minWidth: '80%' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={4}>
                            <ImageSlider data={product} />
                            <ImageList />
                        </Grid>
                        <Grid item xs={4} sm={4} md={8}>
                            <DetailHeader data={product} />
                            <Divider />
                            <Price data={product} />
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