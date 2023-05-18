import { Box, Container } from '@mui/material';
import React from 'react';
import ImageSection from './ImageSection';
import ItemDetail from './ItemDetail';
import PriceDetail from './PriceDetail';
import Shipping from './Shipping';

const AuctionDetail = () => {
    return (
        <Box className='main_detail'>
            <Container sx={{ minWidth: '80%' }}>
                <ImageSection />
                <ItemDetail />
                <PriceDetail />
                <Shipping />
            </Container>
        </Box>
    );
}

export default AuctionDetail;
