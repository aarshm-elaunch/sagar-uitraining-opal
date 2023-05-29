import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import { storeList } from '../../dummy_data';
import { useNavigate } from 'react-router-dom';

const Stores = () => {
    const navigate = useNavigate();
    return (
        <Box className='store_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <Box className="store_list">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {storeList.map((store) =>
                            <Grid item xs={4} sm={4} md={3}>
                                <Box className='store_card' onClick={()=>navigate(`/vendor/${store.id}`)}>
                                    <Box className='img_wrapper'>
                                        <img src={store.img} alt="store" />
                                    </Box>
                                    <Box className='store_detail'>
                                        <h2>{store.name}</h2>
                                        <p>{store.description}</p>
                                    </Box>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Box>
                <Box className='btn_section'>
                    <Button className='btn_theam'>View More Stores</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Stores;
