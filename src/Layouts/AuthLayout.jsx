import React from 'react'
import Header from './AuthHeader'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import AuthHead from './AuthHead'

export default function AuthLayout() {
  return (
    <>
      <AuthHead />
      <Box sx={{ backgroundImage: `url(${require('../assets/images/background.png')})`, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat'   }}>
        <Outlet />
      </Box>
    </>
  )
}
