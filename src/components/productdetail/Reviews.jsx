import React from 'react';
import { Box } from '@mui/material';
import image from '../../assets/images/review_img.png';
import StarIcon from '@mui/icons-material/Star';

const Reviews = () => {
    return (
        <Box className='review_wrapper'>
            <Box className='review_header'>
                <img src={image} alt='img' />
                <Box className='header_detail'>
                    <h3>Marques Brownlee</h3>
                    <Box className='rating'>
                        <StarIcon sx={{height: '16px', width: '16px', fill: '#F4B557'}}/>
                        <p>5.0</p>
                    </Box>
                </Box>
            </Box>
            <p>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas.</p>
        </Box>
    );
}

export default Reviews;
