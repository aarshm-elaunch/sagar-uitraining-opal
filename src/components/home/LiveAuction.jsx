import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import AuctionCard from '../common/AuctionCard';
import { home_auction } from '../../dummy_data';

const LiveAuction = () => {
    return (
        <>
            <Box className="live_section">
                <Container sx={{ minWidth: '80%' }}>
                    <h1>Live Auction</h1>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                        {home_auction.map((item)=>
                            <AuctionCard data={item} color='#fff' />
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default LiveAuction;
