import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid } from '@mui/material';
import auction_1 from '../../assets/images/auction_1.png'
import auction_2 from '../../assets/images/auction_2.png'

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
                    <Grid container spacing={6} columns={16}>
                        <Grid item xs={8}>
                            <Box className="image_wrapper">
                                <img src={auction_1} alt='auction' />
                                <Box className="time">13:00</Box>
                            </Box>
                            <Box className="text_content">
                                <h2>Auction Title Goes Here</h2>
                                <Button className='btn_theam'>Join Auction</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box className="image_wrapper">
                                <img src={auction_2} alt='auction' />
                                <Box className="time">13:00</Box>
                            </Box>
                            <Box className="text_content">
                                <h2>Auction Title Goes Here</h2>
                                <Button className='btn_theam'>Join Auction</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default LiveAuction;
