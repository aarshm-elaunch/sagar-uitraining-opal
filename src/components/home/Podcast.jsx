import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import podcast from '../../assets/images/podcast.png'

const Podcast = () => {
    return (
        <Box className="podcast_section">
            <Container sx={{minWidth: '80%'}}>
                <h1>Podcasts</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="podcast_card">
                            <Box className="img_wrapper">
                                <img src={podcast} alt="podcast" />
                            </Box>
                            <Box className="content">
                                <h5>Podcast title goes here</h5>
                                <p>Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.</p>
                                <Button className='btn'>1 hr 18 min</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="podcast_card">
                            <Box className="img_wrapper">
                                <img src={podcast} alt="podcast" />
                            </Box>
                            <Box className="content">
                                <h5>Podcast title goes here</h5>
                                <p>Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.</p>
                                <Button className='btn'>1 hr 18 min</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="podcast_card">
                            <Box className="img_wrapper">
                                <img src={podcast} alt="podcast" />
                            </Box>
                            <Box className="content">
                                <h5>Podcast title goes here</h5>
                                <p>Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.</p>
                                <Button className='btn'>1 hr 18 min</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={6}>
                        <Box className="podcast_card">
                            <Box className="img_wrapper">
                                <img src={podcast} alt="podcast" />
                            </Box>
                            <Box className="content">
                                <h5>Podcast title goes here</h5>
                                <p>Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.</p>
                                <Button className='btn'>1 hr 18 min</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box className="btn_section">
                    <Button className='btn_theam'> View More Podcast </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Podcast;
