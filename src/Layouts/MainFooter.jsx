import React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import logo from '../assets/images/footer_logo.png';
import facebook from '../assets/images/facebook.png';
import insta from '../assets/images/instagram.png';
import { Link } from 'react-router-dom';

const MainFooter = () => {
    return (
        <Box className="main_footer">
            <Container sx={{ minWidth: '80%' }}>
                <Box className="footer_wrapper">
                    <Box >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className="footer_card">
                                    <img src={logo} alt="logo" />
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={4} md={3}>
                                <Box className="footer_card">
                                    <h2>Quick Links</h2>
                                    <Box className="list">
                                        <Link to="/home" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
                                        <Link to="/auction" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Auctions</Link>
                                        <Link to="/podcast" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Podcasts</Link>
                                        <Link to="#" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Discounts</Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={4} md={3}>
                                <Box className="footer_card">
                                    <h2>Information</h2>
                                    <Box className="list">
                                        <Link to="/policy" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link>
                                        <Link to="/policy" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Terms and Conditions</Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className="footer_card">
                                    <h2>Find us on Social Media</h2>
                                    <Box className="list">
                                        <Link to="#" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} className='media'><img src={facebook} alt="facebook" />Facebook</Link>
                                        <Link to="#" underline="none" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }} className='media'><img src={insta} alt="instagram" />Instagram</Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Divider sx={{ "&.MuiDivider-root": { border: "1px solid #554f6680" } }} />
            </Container>
            <Box className="sub_footer">
                <Typography>©2022, All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
}

export default MainFooter;
