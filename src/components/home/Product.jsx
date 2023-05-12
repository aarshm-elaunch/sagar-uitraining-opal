import React from 'react';
import { Box, Button, Container, Grid, Rating } from '@mui/material';
import product_1 from '../../assets/images/product.png'
import fevorite from '../../assets/images/heart.png'
import { product_list } from '../../dummy_data';

const Product = () => {
    return (
        <Box className="product_section">
            <Container sx={{ minWidth: '80%' }}>
                <h1>Recommended Products</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {product_list.map((data)=>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box className="product_card">
                            <Box className="img_wrapper">
                                <img src={data.image} alt="product" />
                            </Box>
                            <Box className="item_wrapper">
                                <Box className="item_text d_space_between">
                                    <h3>{data.name}</h3>
                                    <img src={fevorite} alt='fevorite' />
                                </Box>
                                <p>Some item description goes here</p>
                                <Box className="item_detail d_space_between">
                                    <h3>{data.price}</h3>
                                    <Rating name="half-rating" readOnly defaultValue={5} precision={0.5} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    )}
                </Grid>
                <Box className="btn_section">
                    <Button className='btn_theam'> View More Product </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Product;
