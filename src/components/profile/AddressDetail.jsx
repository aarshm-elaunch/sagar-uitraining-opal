import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const AddressDetail = () => {
    return (
        <Box className='address_wrapper'>
            <h2>Delivery Address</h2>
            <Box className='address'>
                <Box className='title_detail'>
                    <Box className='title'>
                        <HomeOutlinedIcon sx={{ fill: '#554F67' }} />
                        <h4>Home</h4>
                    </Box>
                    <p>Some address line goes here</p>
                </Box>
                <Box className='icn_section'>
                    <IconButton>
                        <BorderColorOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='address'>
                <Box className='title_detail'>
                    <Box className='title'>
                        <WorkOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                        <h4>Work</h4>
                    </Box>
                    <p>Some address line goes here</p>
                </Box>
                <Box className='icn_section'>
                    <IconButton>
                        <BorderColorOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='address'>
                <Box className='title_detail'>
                    <Box className='title'>
                        <FmdGoodOutlinedIcon sx={{ fill: '#554F67' }} />
                        <h4>Other</h4>
                    </Box>
                    <p>Some address line goes here</p>
                </Box>
                <Box className='icn_section'>
                    <IconButton>
                        <BorderColorOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Button className='btn_add'><AddCircleOutlineOutlinedIcon />Add Delivery Address</Button>
        </Box>
    );
}

export default AddressDetail;
