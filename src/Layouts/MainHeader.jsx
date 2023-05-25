import React from 'react';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Badge, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import logo from '../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import profile_pic from '../assets/images/profile_pic.png'
import profile from '../assets/images/profile.png'
import order from '../assets/images/order.png'
import heart from '../assets/images/heart.png'
import logout from '../assets/images/logout.png'
import useCart from '../hooks/useCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const ITEM_HEIGHT = 48;
const drawerWidth = 240;
const navItems = ["Home", "Auctions", "Podcasts", "Stores", "About us"];
const menuItems = [
    {
        icon: profile,
        item: 'profile',
        location: '/profile'
    },
    {
        icon: order,
        item: 'My Order',
        location: '/profile'
    },
    {
        icon: heart,
        item: 'Wishlist',
        location: '/wishlist'
    },
    {
        icon: logout,
        item: 'logout',
        location: '/'
    },
]

const MainHeader = () => {
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const url = window.location.pathname;


    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={logo} alt="logo" />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const menu = (
        menuItems.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={option.icon} alt="message" />
                    <Typography component='a' sx={{ color: 'inherit', textDecoration: 'none' }} onClick={() => navigate(option.location)}>{option.item}</Typography>
                </Box>
            </MenuItem>
        ))
    );

    return (
        <header>
            <AppBar position="fixed" sx={{ background: '#fff', color: '#000', padding: '10px' }}>
                <Container sx={{ minWidth: '80%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <Box ><img src={logo} alt="logo" /></Box>
                        <Box sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }, alignItems: 'center', gap: '24px' }}>
                                <Link to="/home" className={`link ${url === '/home' && 'active'}`} underline="none" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                                <Link to="/auction" className={`link ${url === '/auction' && 'active'}`} underline="none" style={{ color: 'inherit', textDecoration: 'none' }}>Auctions</Link>
                                <Link to="/podcast" className={`link ${url === '/podcast' && 'active'}`} underline="none" style={{ color: 'inherit', textDecoration: 'none' }}>Podcasts</Link>
                                <Link to="/store" className={`link ${url === '/store' && 'active'}`} underline="none" style={{ color: 'inherit', textDecoration: 'none' }}>Stores</Link>
                                <Link to="/about" className={`link ${url === '/about' && 'active'}`} underline="none" style={{ color: 'inherit', textDecoration: 'none' }}>About us</Link>
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
                            <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }, alignItems: 'center', gap: '24px' }}>
                                <IconButton onClick={() => navigate('/cart')}>
                                    <Badge badgeContent={cartItems && cartItems.length} color="primary">
                                        {url === '/cart' ? <ShoppingBagIcon sx={{fill: '#3B37DA'}} /> : <ShoppingBagOutlinedIcon />}
                                    </Badge>
                                </IconButton>
                                <Divider orientation="vertical" flexItem sx={{ height: '32px', mt: '10px' }} />
                            </Box>
                            <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }, alignItems: 'center', gap: '24px' }}>
                                {url === '/chat' ? <ForumIcon sx={{fill: '#3B37DA'}} /> : <IconButton onClick={() => navigate('/chat')}><ForumOutlinedIcon /></IconButton>}
                                <Divider orientation="vertical" flexItem sx={{ height: '32px', mt: '10px' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar alt="Remy Sharp" src={profile_pic} />
                                <Typography>Marques Brownlee</Typography>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'right',
                                    horizontal: 'right',
                                }}
                            >
                                {menu}
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </header>
    );
}

export default MainHeader;
