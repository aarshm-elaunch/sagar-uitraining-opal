import React from 'react';
import { Box, Container } from '@mui/material';
import Profile from './Profile';
import AddressDetail from './AddressDetail';
import PaymentMethod from './PaymentMethod';

const ProfileDetail = () => {
    return (
        <Box className='profile_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <Profile />
                <AddressDetail />
                <PaymentMethod />
            </Container>
        </Box>
    );
}

export default ProfileDetail;
