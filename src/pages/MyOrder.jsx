import React from 'react';
import '../components/myorder/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import Order from '../components/myorder/Order';

const MyOrder = () => {
    return (
        <Box>
            <Order />
           <MainFooter /> 
        </Box>
    );
}

export default MyOrder;
