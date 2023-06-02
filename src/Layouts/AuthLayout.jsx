import React, { useEffect, useState } from 'react'
import Header from './AuthHeader'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import AuthHead from './AuthHead'

export default function AuthLayout() {
  const navigate = useNavigate()
    const [items, setItems] = useState();
    useEffect(() => {
        const item = localStorage.getItem('credintial');
        if (item) {
         navigate('/home')
        }
      }, []);
  return (
    <>
      <AuthHead />
      <Box sx={{ backgroundImage: `url(${require('../assets/images/background.png')})`, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat'   }}>
        <Outlet />
      </Box>
    </>
  )
}
