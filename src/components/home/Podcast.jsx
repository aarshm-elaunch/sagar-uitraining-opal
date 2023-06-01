import React, { useState } from 'react';
import { Box, Button, Container, Grid, IconButton } from '@mui/material';
import podcast from '../../assets/images/podcast.png'
import { useNavigate } from 'react-router-dom';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { CloseOutlined } from '@mui/icons-material';
import ReactAudioPlayer from 'react-audio-player';
import audio1 from '../../assets/audio/music1.mp3';
import { home_podcast_list } from '../../dummy_data';

const Podcast = () => {
    const navigate = useNavigate();
    const [audio, setAudio] = useState(false);
    const [podcast, setPodcast] = useState();

    const handleClick = (data) => {
        setAudio(true);
        !audio && setPodcast(data);
    }

    return (
        <Box className="podcast_section">
            <Container sx={{ minWidth: '80%' }}>
                <h1>Podcasts</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    {home_podcast_list.map((item) =>
                        <Grid item xs={4} sm={10} md={6}>
                            <Box className="podcast_card">
                                <Box className="img_wrapper">
                                    <img src={item.img} alt="podcast" />
                                </Box>
                                <Box className="content">
                                    <h5>{item.title}</h5>
                                    <p>{item.detail}</p>
                                    <Button className='btn' onClick={() => handleClick(item)}><PlayCircleOutlineOutlinedIcon /> 1 hr 18 min</Button>
                                </Box>
                            </Box>
                        </Grid>
                    )}
                </Grid>
                <Box className="btn_section">
                    <Button className='btn_theam' onClick={() => navigate('/podcast')}> View More Podcast </Button>
                </Box>
            </Container>
            <Box className={audio ? 'audio_wrapper active' : 'audio_wrapper'}>
                <IconButton className='close' onClick={() => setAudio(false)}><CloseOutlined sx={{ height: '12px', width: '12px' }} /></IconButton>
                <Container sx={{ minWidth: '80%' }}>
                    <Box className='audio_detail'>
                        <Box className='img_wrapper'>
                            <img src={podcast?.img} alt="podcast" />
                        </Box>
                        <Box className='audio_control'>
                            <h2>{podcast?.title}</h2>
                            <Box className='audio'>
                                <ReactAudioPlayer
                                    src={podcast?.audio}
                                    controls
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Podcast;
