import React from 'react';
import { Box, Grid } from '@mui/material';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const PriceDetail = () => {
    return (
        <Box className='itemdetail_section'>
            <Box className='title'>
                <PaymentsOutlinedIcon sx={{ fill: '#9E98AC' }} />
                <h3>Pricing & Details</h3>
            </Box>
            <Box className='data'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Bid Increment</h2>
                        <p>$1</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Starting Bid</h2>
                        <p>$1</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Auction ID</h2>
                        <p>1234567</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Watchers</h2>
                        <p>61</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Starts</h2>
                        <p>3rd March 2022 8:32AM PST</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Ends</h2>
                        <p>5rd March 2022 8:32AM PST</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Viewed</h2>
                        <p>100</p>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default PriceDetail;
