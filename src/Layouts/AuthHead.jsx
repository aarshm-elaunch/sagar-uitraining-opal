import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import logo from '../assets/images/logo.png'
import store from '../assets/images/store.png'
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 150;
const navItems = ["Home", "Auctions", "Podcasts", "Stores", "About us"];

const AuthHead = () => {
    const navigate = useNavigate();

    const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    
    const drawer = (
        <Box onClick={handleDrawerToggle}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <header>
            <AppBar position="sticky" sx={{ background: '#fff', color: '#000', padding: '10px' }}>
                <Container sx={{ minWidth: '80%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <Box ><img src={logo} alt="logo" /></Box>
                        <Box sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }, alignItems: 'center', gap: '24px' }}>
                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none' }}>Home</Typography>
                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none' }}>Auctions</Typography>
                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none' }}>Podcasts</Typography>
                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none' }}>Stores</Typography>
                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none' }}>About us</Typography>
                        </Box>
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { lg: 'none', md: 'flex', sm: 'flex', xs: 'flex' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                            <Box sx={{display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }, alignItems: 'center', gap: '24px'}}>
                                <img src={store} alt="store" />
                                <Divider orientation="vertical" flexItem sx={{ height: '32px', mt: '10px' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Button sx={{
                                    background: '#E1E4FA',
                                    "&:hover": { backgroundColor: '#E1E4FA' },
                                    color: '#3B37DA',
                                    height: '48px',
                                    borderRadius: '12px',
                                    padding: '18px, 24px, 18px, 24px',
                                    textTransform: 'capitalize'
                                }} >Vendor Login</Button>
                                <Button sx={{
                                    background: '#3B37DA',
                                    "&:hover": { backgroundColor: '#3B37DA' },
                                    color: '#fff',
                                    height: '48px',
                                    borderRadius: '12px',
                                    padding: '18px, 24px, 18px, 24px',
                                    textTransform: 'capitalize'
                                }} onClick={() => navigate('/')}>Login</Button>
                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: '-15px', display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </header>
    );
}

export default AuthHead;
