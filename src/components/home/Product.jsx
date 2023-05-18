import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, Container, Grid, Rating } from '@mui/material';
import { product_list } from '../../dummy_data';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Product = () => {
    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box className="product_section">
            <Container sx={{ minWidth: '80%' }}>
                <h1>Recommended Products</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {product_list.map((data) =>
                        <Grid item xs={4} sm={4} md={3}>
                            <Box className="product_card">
                                <Box className="img_wrapper">
                                    <img src={data.image} alt="product" />
                                </Box>
                                <Box className="item_wrapper">
                                    <Box className="item_text d_space_between">
                                        <h3>{data.name}</h3>
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{fill: 'red'}} />} />
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
                    <Button className='btn_theam' onClick={()=> navigate('/products')}> View More Product </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Product;
