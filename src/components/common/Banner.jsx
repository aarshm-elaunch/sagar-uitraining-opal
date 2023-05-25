import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Banner = ({bg_image, title}) => {
    return (
        <Box sx={{
            padding: '56px 0',
            marginTop: '80px',
            textAlign: 'center',
            backgroundColor: '#00000080',
            backgroundBlendMode: 'overlay',
            backgroundImage: `url(${bg_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container sx={{ minWidth: '80%' }}>
                <Typography sx={{ color: '#fff', fontSize: '40px', fontWeight: '700'}}>{title}</Typography>
            </Container>
        </Box>
    );
}

export default Banner;
