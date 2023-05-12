import React from 'react';
// import './style.scss'
import { Box, Button, Container, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Banner = () => {
    return (
        <Box className="banner_section">
            <Container sx={{ minWidth: '80%', height: '100%' }}>
                <Box className="banner_main">
                    <Box className="text_conetnt">
                        <h1>Opal Empire, Your One-Stop for Opals</h1>
                        <p>Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus.</p>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '28px', height: '56px', mt: '24px' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search what are you looking for?"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <Button sx={{
                                m: '0 5px',
                                background: '#3B37DA',
                                color: '#fff',
                                height: '40px',
                                width: '40px',
                                minWidth: 'unset',
                                borderRadius: '50%',
                                textTransform: 'capitalize',
                                "&:hover": { backgroundColor: '#3B37DA' },
                            }}><SearchIcon /></Button>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Banner;
