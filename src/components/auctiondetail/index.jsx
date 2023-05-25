import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageSection from './ImageSection';
import ItemDetail from './ItemDetail';
import PriceDetail from './PriceDetail';
import Shipping from './Shipping';
import { auction_list } from '../../dummy_data';
import { useParams } from 'react-router-dom';

const AuctionDetail = () => {
    const [auction, setAuction] = useState();
    const {id} = useParams();
    
    useEffect(()=>{
        auction_list.map((item)=>item.id === id && setAuction(item))
    })
    return (
        <Box className='main_detail'>
            <Container sx={{ minWidth: '80%' }}>
                <ImageSection data={auction} />
                <ItemDetail />
                <PriceDetail />
                <Shipping />
            </Container>
        </Box>
    );
}

export default AuctionDetail;
