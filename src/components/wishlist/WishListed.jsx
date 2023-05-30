import React from 'react';
import { Box, Checkbox, Container, Grid, Rating } from '@mui/material';
import { product_list } from '../../dummy_data';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import useWishList from '../../hooks/useWishList';
import ProductCard from '../common/ProductCard';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const WishListed = () => {
    const { fevoriteItems } = useWishList();
    return (
        <Box className='wishlist_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <h2>Wishlist</h2>
                <Box className='list_item'>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                        {fevoriteItems.map((data) =>
                            <ProductCard data={data} />
                        )}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default WishListed;
