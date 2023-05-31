import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, IconButton, Modal, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import payment1 from '../../assets/images/Payment1.png';
import payment2 from '../../assets/images/Payment2.png';
import payment3 from '../../assets/images/Payment3.png';
import payment4 from '../../assets/images/Payment4.png';
import payment5 from '../../assets/images/Payment5.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: '32px',
    borderRadius: '15px'
};

const PaymentMethod = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box className='payment_wrapper'>
            <h2>Payment Method</h2>
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment1} alt='img' /></Box>
                <Box className='data'>
                    <p>1234567890</p>
                    <IconButton className='btn_icon' onClick={()=>handleOpen()}><DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} /></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment2} alt='img' /></Box>
                <Box className='data'>
                    <p>0987654321</p>
                    <IconButton className='btn_icon' onClick={()=>handleOpen()}><DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} /></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment3} alt='img' /></Box>
                <Box className='data'>
                    <p>2345678912</p>
                    <IconButton className='btn_icon' onClick={()=>handleOpen()}><DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} /></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment4} alt='img' /></Box>
                <Box className='data'>
                    <p>5678901234</p>
                    <IconButton className='btn_icon' onClick={()=>handleOpen()}><DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} /></IconButton>
                </Box>
            </Box>
            <Divider />
            <Box className='payment_detail'>
                <Box className='img_wrapper'><img src={payment5} alt='img' /></Box>
                <Box className='data'>
                    <p>3214569870</p>
                    <IconButton className='btn_icon' onClick={()=>handleOpen()}><DeleteOutlineOutlinedIcon sx={{ fill: '#554F67' }} /></IconButton>
                </Box>
            </Box>
            <Divider />
            <Button className='btn_add' onClick={() => navigate('/stripe')}><AddCircleOutlineOutlinedIcon />Add Payment Method</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                        Remove Payment method
                    </Typography>
                    <Typography sx={{ mt: '16px', textAlign: 'center', fontSize: '13px', color: '#554F67' }}>
                        Are you sure you want to remove
                        <h3>Stripe - 1234567890</h3>
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

export default PaymentMethod;
