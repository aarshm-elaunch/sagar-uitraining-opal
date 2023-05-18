import React, { useState } from 'react';
import { Box, Button, Checkbox, Divider, FormControl, Grid, InputAdornment, Modal, OutlinedInput, Typography } from '@mui/material';
import auction_1 from '../../assets/images/auction_1.png'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '300px',
    bgcolor: 'background.paper',
    p: '32px',
    borderRadius: '15px'
};

const ImageSection = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        // setShow(true);
    }
    const handleShowOpen = () => setShow(true);
    const handleShowClose = () => setShow(false);
    return (
        <Box className='image_section'>
            <Box className='img_wrapper'>
                <img src={auction_1} alt='auction' />
            </Box>
            <Box className='detail'>
                <h2>Auction Title Goes Here</h2>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ fill: 'red' }} />} />
            </Box>
            <Divider />
            <Box className='bid_section'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                    <Grid item xs={4} sm={10} md={4}>
                        <Box className='bid_detail'>
                            <p>Last Bid</p>
                            <h3>$2,500</h3>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={10} md={8}>
                        <Box className='bid_action'>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                                <Grid item xs={4} sm={5} md={6}>
                                    <FormControl fullWidth>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            className='input_field'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4} sm={5} md={6}>
                                    <Button className='btn_theam btn_bid' onClick={() => handleOpen()}>Place your bid</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                        Confirm your bid
                    </Typography>
                    <Typography sx={{ mt: '16px', textAlign: 'center', fontSize: '13px', color: '#554F67' }}>
                        Are you sure you want to place a bid of
                        <h2>$2,501 AUD?</h2>
                    </Typography>
                    <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: 'space-between', mt: '24px', gap: '15px' }}>
                        <Button className='btn_theam2'>Cancel</Button>
                        <Button className='btn_theam' onClick={() => { handleClose(); handleShowOpen() }}>Confirm</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal
                open={show}
                onClose={handleShowClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                        Bid placed successfully!
                    </Typography>
                    <Box sx={{ mt: '24px', gap: '15px', textAlign: 'center' }}>
                        <Button className='btn_theam' onClick={() => handleShowClose()}>Confirm</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default ImageSection;
