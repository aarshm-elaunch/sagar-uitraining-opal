import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid} from '@mui/material';

const AuctionCard = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Grid item xs={4} sm={10} md={6}>
            <Box className='auction_card'>
                <Box className="image_wrapper">
                    <img src={data.img} alt='auction' />
                    <Box className="time">13:00</Box>
                </Box>
                <Box className="text_content">
                    <h2>{data.title}</h2>
                    <Button className='btn_theam' onClick={() => navigate(`/auctiondetail/${data.id}`)}>Join Auction</Button>
                </Box>
            </Box>
        </Grid>
    );
}

export default AuctionCard;
