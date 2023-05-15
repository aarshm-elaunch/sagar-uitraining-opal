import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import img4 from '../../assets/images/about4.png';


const SecondSection = () => {
    return (
        <Box className="second_section">
            <Container sx={{ minWidth: '80%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    <Grid item xs={4} sm={10} md={6}>
                    <Box className="content">
                            <h2>Heading goes here</h2>
                            <Typography component="p" sx={{color: '#646464'}}>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum nam quam.</Typography>
                            <Typography component="p" sx={{color: '#646464'}}>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum nam quam.</Typography>
                            <Typography component="p" sx={{color: '#646464'}}>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum nam quam.</Typography>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={10} md={6}>
                        <Box className="image_wraper">
                            <img src={img4} alt="img" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default SecondSection;
