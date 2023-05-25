import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, IconButton, Slider, Typography } from '@mui/material';
import podcast from '../../assets/images/podcast.png';
import { podcast_list } from '../../dummy_data';
import ReactAudioPlayer from 'react-audio-player';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

const PodcastSection = () => {
    const [audio, setAudio] = useState(false);
    const [podcast, setPodcast] = useState();

    const duration = 200;
    const theme = useTheme();
    const [position, setPosition] = useState(0);
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const handleClick = (data) => {
        setAudio(true);
        !audio && setPodcast(data);
    }

    return (
        <Box className='podcast_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <Box className='podcast'>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {podcast_list.map((item) =>
                            <Grid item xs={4} sm={4} md={6}>
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
                </Box>
                <Box className="btn_section">
                    <Button className='btn_theam'> View More Podcast </Button>
                </Box>
            </Container>
            <Box className={audio ? 'audio_wrapper active' : 'audio_wrapper'}>
                <IconButton className='close' onClick={() => setAudio(false)}><CloseOutlinedIcon sx={{ height: '12px', width: '12px' }} /></IconButton>
                <Container sx={{ minWidth: '80%' }}>
                    <Box className='audio_detail'>
                        <img src={podcast?.img} alt="img" />
                        <Box className='audio_control'>
                            <h2>{podcast?.title}</h2>
                            <ReactAudioPlayer
                                src={podcast?.audio}
                                controls
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default PodcastSection;
