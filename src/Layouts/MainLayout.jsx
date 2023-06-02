import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import MainHeader from './MainHeader';


const MainLayout = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState();
    useEffect(() => {
        const item = localStorage.getItem('credintial');
        if (!item) {
         navigate('/')
        }
      }, []);

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
