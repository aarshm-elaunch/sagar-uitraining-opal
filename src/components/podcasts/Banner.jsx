import React from 'react';
import { Box, Container } from '@mui/material';

const Banner = () => {
    return (
        <Box className="banner_section">
            <Container sx={{ minWidth: '80%' }}>
                <h2 sx={{ color: "#fff" }}>Podcasts</h2>
            </Container>
        </Box>
    );
}

export default Banner;