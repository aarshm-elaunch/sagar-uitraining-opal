import React, { useState } from 'react';
import { Box, Button, Divider, IconButton, Modal, Typography } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

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

const AddressDetail = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box className='address_wrapper'>
            <h2>Delivery Address</h2>
            <Box className='address'>
                <Box className='title_detail'>
                    <Box className='title'>
                        <HomeOutlinedIcon sx={{ fill: '#554F67' }} />
                        <h4>Home</h4>
                    </Box>
                    <p>Some address line goes here</p>
                </Box>
                <Box className='icn_section'>
                    <IconButton>
                        <BorderColorOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                    <IconButton onClick={() => handleOpen()}>
                        <DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='address'>
                <Box className='title_detail'>
                    <Box className='title'>
                        <WorkOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                        <h4>Work</h4>
                    </Box>
                    <p>Some address line goes here</p>
                </Box>
                <Box className='icn_section'>
                    <IconButton>
                        <BorderColorOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                    <IconButton onClick={() => handleOpen()}>
                        <DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='address'>
                <Box className='title_detail'>
                    <Box className='title'>
                        <FmdGoodOutlinedIcon sx={{ fill: '#554F67' }} />
                        <h4>Other</h4>
                    </Box>
                    <p>Some address line goes here</p>
                </Box>
                <Box className='icn_section'>
                    <IconButton>
                        <BorderColorOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                    <IconButton onClick={() => handleOpen()}>
                        <DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Button className='btn_add'><AddCircleOutlineOutlinedIcon />Add Delivery Address</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                        Remove Delivery Address
                    </Typography>
                    <Typography sx={{ mt: '16px', textAlign: 'center', fontSize: '13px', color: '#554F67' }}>
                        Are you sure you want to remove
                        <h3>”Address line goes here”</h3>
                    </Typography>
                    <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: 'space-between', mt: '24px', gap: '15px' }}>
                        <Button className='btn_theam2' onClick={() => handleClose()}>cancle</Button>
                        <Button sx={{
                            background: '#FCE9E9',
                            color: '#FE5F7C',
                            height: '48px',
                            width: '100%',
                            borderRadius: '12px',
                            textTransform: 'capitalize',
                            padding: '18px 24px',
                            "&:hover": { backgroundColor: '#FCE9E9' },
                            mt: { lg: '0', md: '0', sm: '0', xs: '10px' }
                        }} onClick={() => handleClose()}>Remove</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default AddressDetail;
