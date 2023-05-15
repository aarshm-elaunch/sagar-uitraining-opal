import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import auction_1 from '../../assets/images/auction_1.png'
import auction_2 from '../../assets/images/auction_2.png'
import auction_3 from '../../assets/images/auction_3.png'
import auction_4 from '../../assets/images/auction_4.png'

const AuctionSection = () => {
    return (
        <Box className="auction_section">
            <Container sx={{ minWidth: '80%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="image_wrapper">
                            <img src={auction_1} alt='auction' />
                            <Box className="time">13:00</Box>
                        </Box>
                        <Box className="text_content">
                            <h2>Auction Title Goes Here</h2>
                            <Button className='btn_theam'>Join Auction</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="image_wrapper">
                            <img src={auction_2} alt='auction' />
                            <Box className="time">13:00</Box>
                        </Box>
                        <Box className="text_content">
                            <h2>Auction Title Goes Here</h2>
                            <Button className='btn_theam'>Join Auction</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="image_wrapper">
                            <img src={auction_3} alt='auction' />
                            <Box className="time">13:00</Box>
                        </Box>
                        <Box className="text_content">
                            <h2>Auction Title Goes Here</h2>
                            <Button className='btn_theam'>Join Auction</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="image_wrapper">
                            <img src={auction_4} alt='auction' />
                            <Box className="time">13:00</Box>
                        </Box>
                        <Box className="text_content">
                            <h2>Auction Title Goes Here</h2>
                            <Button className='btn_theam'>Join Auction</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box className="btn_section">
                    <Button className='btn_theam2'>View More Podcasts</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default AuctionSection;
