import React from 'react'
import { AppBar, Box, Button, Container, Divider, Grid, Toolbar, Typography } from '@mui/material'
import logo from '../assets/images/logo.png'
import store from '../assets/images/store.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" sx={{ background: '#fff', color: '#000', height: '80px', padding: '10px' }}>
      <Container sx={{ minWidth: '80%' }}>
        <Toolbar >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid item xs={2} sm={4} md={4} sx={{ textAlign: 'center' }}>
              {/* <img src={logo} alt="logo" /> */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
                <Typography>Home</Typography>
                <Typography>Auctions</Typography>
                <Typography>Podcasts</Typography>
                <Typography>Stores</Typography>
                <Typography>About us</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4} sx={{ textAlign: 'end' }} >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <img src={store} alt="store" />
                </Box>
                <Divider orientation="vertical" flexItem sx={{height: '32px', mt: '10px'}} />
                <Box>
                  <Button sx={{
                    background: '#E1E4FA',
                    "&:hover": { backgroundColor: '#E1E4FA' },
                    color: '#3B37DA',
                    width: '138px',
                    height: '48px',
                    borderRadius: '12px',
                    padding: '18px, 24px, 18px, 24px',
                    mr: '16px',
                    textTransform: 'capitalize'
                  }} >Vendor Login</Button>
                  <Button sx={{
                    background: '#3B37DA',
                    "&:hover": { backgroundColor: '#3B37DA' },
                    color: '#fff',
                    width: '94px',
                    height: '48px',
                    borderRadius: '12px',
                    padding: '18px, 24px, 18px, 24px',
                    textTransform: 'capitalize'
                  }} onClick={()=>navigate('/')}>Login</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
