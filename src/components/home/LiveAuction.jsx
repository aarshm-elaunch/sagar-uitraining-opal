import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid } from '@mui/material';
import auction_1 from '../../assets/images/auction_1.png'
import auction_2 from '../../assets/images/auction_2.png'
import AuctionCard from '../common/AuctionCard';
import { home_auction } from '../../dummy_data';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const LiveAuction = () => {
    return (
        <>
            <Box className="live_section">
                <Container sx={{ minWidth: '80%' }}>
                    <h1>Live Auction</h1>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                        {home_auction.map((item)=>
                            <AuctionCard data={item} />
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default LiveAuction;
