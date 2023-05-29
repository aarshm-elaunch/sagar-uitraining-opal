import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid} from '@mui/material';

const AuctionCard = ({ data, color }) => {
    const [time, setTime] = useState();
    const navigate = useNavigate();

    let timeOut = setInterval(() => {
        let date = new Date(data?.date).getTime();
        let now = new Date().getTime();
        let distance = date - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days < 1) {
          days = "";
        } else {
          days = `${days}d `;
        }
        if (hours < 10) {
          hours = `0${hours}`;
        }
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
        if (distance > 0) {
            setTime(`${days}${hours}:${minutes}:${seconds}`);
        } else {
          clearInterval(timeOut);
          setTime('Auction Expire');
        }
      }, 1000);

    return (
        <Grid item xs={4} sm={10} md={6}>
            <Box className='auction_card'>
                <Box className="image_wrapper">
                    <img src={data.img} alt='auction' />
                    <Box className="time">{time}</Box>
                </Box>
                <Box className="text_content">
                    <h2 style={{color: color}}>{data.title}</h2>
                    <Button className='btn_theam' onClick={() => navigate(`/auctiondetail/${data.id}`)}>Join Auction</Button>
                </Box>
            </Box>
        </Grid>
    );
}

export default AuctionCard;
