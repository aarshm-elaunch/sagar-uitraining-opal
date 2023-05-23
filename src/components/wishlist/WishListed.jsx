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
    console.log(fevoriteItems);
    return (
        <Box className='wishlist_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <h2>Wishlist</h2>
                <Box className='list_item'>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                        {fevoriteItems.map((data) =>
                            // <Grid item xs={4} sm={4} md={3}>
                            //     <Box className="product_card">
                            //         <Box className="img_wrapper">
                            //             <img src={data.image} alt="product" />
                            //         </Box>
                            //         <Box className="item_wrapper">
                            //             <Box className="item_text d_space_between">
                            //                 <h3>{data.name}</h3>
                            //                 <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ fill: 'red' }} />} defaultChecked />
                            //             </Box>
                            //             <p>Some item description goes here</p>
                            //             <Box className="item_detail d_space_between">
                            //                 <h3>{data.price}</h3>
                            //                 <Rating name="half-rating" readOnly defaultValue={5} precision={0.5} />
                            //             </Box>
                            //         </Box>
                            //     </Box>
                            // </Grid>
                            <ProductCard data={data} />
                        )}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default WishListed;
