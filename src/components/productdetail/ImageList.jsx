import React from 'react';
import { Box, Grid } from '@mui/material';
import preview1 from '../../assets/images/preview1.png';
import preview2 from '../../assets/images/preview2.png';
import preview3 from '../../assets/images/preview3.png';
import preview4 from '../../assets/images/preview4.png';

const ImageList = () => {
    return (
        <Box className='imagelist_wrapper'>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ sx: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={2} md={3}>
                    <img src={preview1} alt="preview" />
                </Grid>
                <Grid item xs={4} sm={2} md={3} >
                    <img src={preview2} alt="preview" />
                </Grid>
                <Grid item xs={4} sm={2} md={3}>
                    <img src={preview3} alt="preview" />
                </Grid>
                <Grid item xs={4} sm={2} md={3}>
                    <img src={preview4} alt="preview" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ImageList;
