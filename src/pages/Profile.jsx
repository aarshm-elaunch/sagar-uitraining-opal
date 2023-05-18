import React from 'react';
import '../components/profile/style.scss';
import { Box } from '@mui/material';
import ProfileDetail from '../components/profile';
import MainFooter from '../Layouts/MainFooter';

const Profile = () => {
    return (
        <Box>
            <ProfileDetail />
            <MainFooter />
        </Box>
    );
}

export default Profile;
