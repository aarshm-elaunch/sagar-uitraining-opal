import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import MainHeader from './MainHeader';


const MainLayout = () => {
    return (
        <>
            <MainHeader />
            <Box sx={{ backgroundImage: `url(${require('../assets/images/background.png')})`, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', height: 'calc(100vh - 80px)' }}>
                <Outlet />
            </Box>
        </>
    );
}

export default MainLayout;
