import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';
import { product_list } from '../../dummy_data';
import ProductCard from '../common/ProductCard';

const Product = () => {
    const navigate = useNavigate();

    return (
        <Box className="product_section">
            <Container sx={{ minWidth: '80%' }}>
                <h1>Recommended Products</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {product_list.map((data) =>
                        <ProductCard data={data}/>
                    )}
                </Grid>
                <Box className="btn_section">
                    <Button className='btn_theam' onClick={() => navigate('/products')}> View More Product </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Product;
