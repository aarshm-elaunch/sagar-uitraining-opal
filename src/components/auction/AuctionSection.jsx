import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import AuctionCard from '../common/AuctionCard';
import { auction_list } from '../../dummy_data';

const AuctionSection = () => {
    return (
        <Box className="auction_section">
            <Container sx={{ minWidth: '80%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    {auction_list.map((item)=>
                        <AuctionCard data={item} color='#000'/>
                    )}
                </Grid>
                <Box className="btn_section">
                    <Button className='btn_theam2'>View More Podcasts</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default AuctionSection;
