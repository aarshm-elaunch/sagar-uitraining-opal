import React from 'react';
import { Box, Button, Divider, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import payment1 from '../../assets/images/Payment1.png';
import payment2 from '../../assets/images/Payment2.png';
import payment3 from '../../assets/images/Payment3.png';
import payment4 from '../../assets/images/Payment4.png';
import payment5 from '../../assets/images/Payment5.png';

const PaymentMethod = () => {
    return (
        <Box className='payment_wrapper'>
            <h2>Payment Method</h2>
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment1} alt='img' /></Box>
                <Box className='data'>
                    <p>1234567890</p>
                    <IconButton className='btn_icon'><DeleteOutlineOutlinedIcon sx={{fill: '#554F67'}}/></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment2} alt='img' /></Box>
                <Box className='data'>
                    <p>0987654321</p>
                    <IconButton className='btn_icon'><DeleteOutlineOutlinedIcon sx={{fill: '#554F67'}}/></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment3} alt='img' /></Box>
                <Box className='data'>
                    <p>2345678912</p>
                    <IconButton className='btn_icon'><DeleteOutlineOutlinedIcon sx={{fill: '#554F67'}}/></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment4} alt='img' /></Box>
                <Box className='data'>
                    <p>5678901234</p>
                    <IconButton className='btn_icon'><DeleteOutlineOutlinedIcon sx={{fill: '#554F67'}}/></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment5} alt='img' /></Box>
                <Box className='data'>
                    <p>3214569870</p>
                    <IconButton className='btn_icon'><DeleteOutlineOutlinedIcon sx={{fill: '#554F67'}}/></IconButton>
                </Box>
            </Box>
            <Divider />
            <Button className='btn_add'><AddCircleOutlineOutlinedIcon />Add Payment Method</Button>
        </Box>
    );
}

export default PaymentMethod;
