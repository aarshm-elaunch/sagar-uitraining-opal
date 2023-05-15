import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import img1 from '../../assets/images/about1.png';
import img2 from '../../assets/images/about2.png';
import img3 from '../../assets/images/about3.png';


const FirstSection = () => {
    return (
        <Box className="first_section">
            <Container sx={{ minWidth: '80%' }}>
                <Box className="inner_section">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="main_wrapper">
                            <Box className="img_section">
                                <img src={img2} alt='img' />
                                <img src={img3} alt='img' />
                            </Box>
                            <Box >
                                <img src={img1} alt='img' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={10} md={6}>
                        <Box className="content">
                            <h2>About Us</h2>
                            <Typography component="p" sx={{color: '#646464'}}>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum nam quam.</Typography>
                            <Typography component="p" sx={{color: '#646464'}}>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum nam quam.</Typography>
                            <Typography component="p" sx={{color: '#646464'}}>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum nam quam.</Typography>
                            
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default FirstSection;
