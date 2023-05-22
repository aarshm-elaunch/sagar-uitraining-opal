import React from 'react';
import { Box, Button, Grid, IconButton } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Price = () => {
    return (
        <Box className='price_wrapper'>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={4} sm={4} md={6}>
                    <h2>Item price</h2>
                    <p>$2,500.00</p>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                    <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className='inc_dec'>
                                <IconButton className='decreement'><RemoveOutlinedIcon /></IconButton>
                                1
                                <IconButton className='increement'><AddOutlinedIcon /></IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Button className='btn_theam'><ShoppingBagOutlinedIcon />Add to cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Price;
