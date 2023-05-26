import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import image from '../../assets/images/store/store1.png';

const Order = () => {
    return (
        <Box className='order_wrapper'>
            <Container sx={{minWidth: '80%'}}>
                <Box className='order_list'>
                    <h2>My Orders</h2>
                    <Box className='order_card'>
                        <Box className='img_wrapper'>
                            <img src={image} alt="img" />
                        </Box>
                        <Box className='order_details'>
                            <Box className='title'>
                                <h4>Vendor Name</h4>
                                <p>$2,000</p>
                            </Box>
                            <h5>Ordered item name here</h5>
                            <Box className='status'>
                                <Box className='accepted'>Accepted</Box>
                                <p>12 Mar 2022</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='order_card'>
                        <Box className='img_wrapper'>
                            <img src={image} alt="img" />
                        </Box>
                        <Box className='order_details'>
                            <Box className='title'>
                                <h4>Vendor Name</h4>
                                <p>$2,000</p>
                            </Box>
                            <h5>Ordered item name here</h5>
                            <Box className='status'>
                                <Box className='completed'>Completed</Box>
                                <p>12 Mar 2022</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='order_card'>
                        <Box className='img_wrapper'>
                            <img src={image} alt="img" />
                        </Box>
                        <Box className='order_details'>
                            <Box className='title'>
                                <h4>Vendor Name</h4>
                                <p>$2,000</p>
                            </Box>
                            <h5>Ordered item name here</h5>
                            <Box className='status'>
                                <Box className='cancelled'>Cancelled</Box>
                                <p>12 Mar 2022</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Order;
