import React from 'react';
import { Box } from '@mui/material';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';

const Shipping = () => {
    return (
        <Box className='shipping_wrapper'>
            <Box className='icn'><FlightTakeoffOutlinedIcon sx={{fill: '#F48C40'}}/></Box>
            <Box className='shipping_details'>
                <h1>Shipping $7.00</h1>
                <p>30 Days via Standard Shipping - Tracked</p>
            </Box>
        </Box>
    );
}

export default Shipping;
