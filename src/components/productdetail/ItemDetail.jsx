import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ItemDetail = () => {
    return (
        <Box className='itemdetail_section'>
            <Box className='title'>
                <InfoOutlinedIcon sx={{ fill: '#9E98AC' }} />
                <h3>Item Detail</h3>
            </Box>
            <Box className='data'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Dimentions</h2>
                        <p>5.8 x 5.8 x 2.9mm</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Weight</h2>
                        <p>5.03 carats</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Type</h2>
                        <p>Cabochon</p>
                    </Grid>
                    <Grid item xs={2} sm={4} md={3}>
                        <h2>Shape</h2>
                        <p>Oval</p>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box className='about_section'>
                <h3>About item</h3>
                <p>This is a natural untreated specimen from the B+B mine in Esmeralda County Nevada.USA . This materialfluorescences purple .Interesting collectors specimen.</p>
            </Box>
        </Box>
    );
}

export default ItemDetail;
