import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import MainHeader from './MainHeader';


const MainLayout = () => {
    return (
        <>
            <MainHeader />
            <Box>
                <Outlet />
            </Box>
        </>
    );
}

export default MainLayout;
