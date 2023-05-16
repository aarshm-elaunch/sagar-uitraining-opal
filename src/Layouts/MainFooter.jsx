import React from 'react';
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import logo from '../assets/images/footer_logo.png';
import facebook from '../assets/images/facebook.png';
import insta from '../assets/images/instagram.png';

const MainFooter = () => {
    return (
        <Box className="main_footer">
            <Container sx={{ minWidth: '80%' }}>
                <Box className="footer_wrapper">
                    <Box >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className="footer_card">
                                    <img src={logo} alt="logo" />
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className="footer_card">
                                    <h2>Quick Links</h2>
                                    <Box className="list">
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Home</Typography>
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Auctions</Typography>
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Podcasts</Typography>
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Discounts</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className="footer_card">
                                    <h2>Information</h2>
                                    <Box className="list">
                                        <Typography href='/policy' component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Typography>
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Terms and Conditions</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className="footer_card">
                                    <h2>Find us on Social Media</h2>
                                    <Box className="list">
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} className='media'><img src={facebook} alt="facebook" />Facebook</Typography>
                                        <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} className='media'><img src={insta} alt="instagram" />Instagram</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Divider sx={{"&.MuiDivider-root": {border: "1px solid #554f6680"}}} />
            </Container>
            <Box className="sub_footer">
                <Typography>©2022, All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
}

export default MainFooter;
