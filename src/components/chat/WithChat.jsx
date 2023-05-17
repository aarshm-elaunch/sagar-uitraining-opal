import React from 'react';
import { Box, ListItem } from '@mui/material';

const WithChat = () => {
    return (
        <ListItem sx={{ padding: '0', width: '100%', display: 'block' }}>
            <Box className='left_side'>
                <span className='time'>8:40 PM</span>
                <p>Massage</p>
            </Box>
        </ListItem>
    );
}

export default WithChat;
