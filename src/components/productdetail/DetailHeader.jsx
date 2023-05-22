import React from 'react';
import { Box, Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const DetailHeader = () => {
    return (
        <Box className='header_wrapper'>
            <Box className='title_wrapper'>
                <h2>Item name goes here</h2>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ fill: 'red' }} />} />
            </Box>
            <Box className='rating'>
                <StarIcon sx={{ height: '16px', width: '16px', fill: '#F4B557' }} />
                <p>5.0 <span className='reviews'>( 124 reviews )</span></p>
            </Box>
        </Box>
    );
}

export default DetailHeader;
