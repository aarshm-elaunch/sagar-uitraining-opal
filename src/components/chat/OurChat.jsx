import React from 'react';
import { Box, ListItem } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const OurChat = () => {
    return (
        <ListItem sx={{ padding: '0', width: '100%', display: 'block' }}>
            <Box className='right_side'>
                <span className='time'>8:32 PM</span>
                <p>Hi, is the blue one available?</p>
                <Box>
                    <DoneAllIcon sx={{ fill: '#3B37DA' }} />
                </Box>
            </Box>
        </ListItem>
    );
}

export default OurChat;
