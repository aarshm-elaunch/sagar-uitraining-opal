import React, { useState } from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    Modal,
    OutlinedInput,
    Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../assets/images/logo1.png'
import google from '../assets/images/google.png'
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: '32px',
    borderRadius: '15px'
};

const SignUp = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [cred, setCred] = useState({fName: '', lName: '', email: '', password: ''});

    const handleSignin = () => {
        localStorage.setItem('credintial', JSON.stringify(cred));
        navigate('/')
    }

    return (
        <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
            <Container sx={{ minWidth: '80%' }}>
                <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'block' }, alignItems: 'center', justifyContent: 'space-between', mt: '60px' }}>
                    <Box sx={{ background: '#fff', padding: '48px', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '35px', fontWeight: '700', mb: '16px' }}>Sign Up</Typography>
                        <Typography>Sign up with Email or Google Account</Typography>

                        <Button sx={{
                            background: '#ffffff',
                            "&:hover": { backgroundColor: '#ffffff', border: '1px solid #E5E5E5' },
                            width: '100%',
                            height: '48px',
                            border: '1px solid #E5E5E5',
                            borderRadius: '12px',
                            m: '40px 0',
                            color: '#000',
                            gap: '5px',
                            textTransform: 'capitalize'
                        }}><img src={google} alt="logo" />Sign up with Google</Button>

                        <Divider sx={{ mb: '8px' }}>Sign up with email</Divider>


                        <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex' }, gap: '16px', mt: '32px' }}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">First Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    className='input_field'
                                    label="First Name"
                                    sx={{ borderRadius: '10px' }}
                                    value={cred.fName}
                                    onChange={(e)=>setCred({...cred, 'fName': e.target.value})}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: { lg: '0', md: '0', sm: '0', xs: '24px' } }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Last Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    className='input_field'
                                    label="Last Name"
                                    sx={{ borderRadius: '10px' }}
                                    value={cred.lName}
                                    onChange={(e)=>setCred({...cred, 'lName': e.target.value})}
                                />
                            </FormControl>
                        </Box>

                        <FormControl fullWidth sx={{ margin: '24px 0' }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Email address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                className='input_field'
                                label="Email address"
                                sx={{ borderRadius: '10px' }}
                                value={cred.email}
                                onChange={(e)=>setCred({...cred, 'email': e.target.value})}

                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={show ? 'text' : 'password'}
                                label="password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={() => setShow(!show)}
                                        >
                                            {show ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                sx={{ borderRadius: '10px' }}
                                value={cred.password}
                                onChange={(e)=>setCred({...cred, 'password': e.target.value})}
                            />
                        </FormControl>

                        <Box sx={{ display: 'flex', alignItems: 'center', m: '24px 0 8px 0' }}>
                            <FormControlLabel control={<Checkbox />} sx={{ mr: '5px' }} />
                            <Typography> I agree to <span style={{color: '#3B37DA', fontWeight: '600', cursor: 'pointer' }}>Terms and Conditions</span></Typography>
                        </Box>

                        <Button variant='contained' sx={{
                            "&:hover": { backgroundColor: '#3B37DA' },
                            width: '100%',
                            height: '48px',
                            borderRadius: '12px',
                            m: '32px 0',
                            color: '#fff',
                            gap: '5px',
                            textTransform: 'capitalize'
                        }} onClick={() => handleSignin()}>Sign Up</Button>

                        <Box sx={{ display: 'flex', gap: '5px', flexDirection:{lg: 'row', md: 'row', sm: 'row', xs: 'column'} }}>
                            <Typography> Don't have an account yet? </Typography>
                            <Typography sx={{ color: '#3B37DA', fontWeight: '400', cursor: 'pointer' }} onClick={() => navigate('/')}>Login here</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, alignItems: 'center', justifyContent: 'center' }} margin='auto'>
                        <img src={logo} alt="logo" />
                    </Box>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                            We have sent you a verification link
                        </Typography>
                        <Typography sx={{ mt: '16px', textAlign: 'center', fontSize: '13px', color: '#554F67' }}>
                            Open the link we sent you in the email to verify your account
                        </Typography>
                        <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: 'space-between', mt: '24px', gap: '15px' }}>
                            <Button sx={{
                                background: '#E1E4FA',
                                color: '#3B37DA',
                                height: '48px',
                                width: '100%',
                                borderRadius: '12px',
                                textTransform: 'capitalize',
                                padding: '18px 24px',
                                "&:hover": { backgroundColor: '#E1E4FA' },
                            }}>Resend Email</Button>
                            <Button sx={{
                                background: '#3B37DA',
                                color: '#fff',
                                height: '48px',
                                width: '100%',
                                borderRadius: '12px',
                                textTransform: 'capitalize',
                                padding: '18px 24px',
                                "&:hover": { backgroundColor: '#3B37DA' },
                                mt: { lg: '0', md: '0', sm: '0', xs: '10px' }
                            }} onClick={() => handleClose()}>Okay</Button>
                        </Box>
                    </Box>
                </Modal>
            </Container>
        </Box>

    )
}

export default SignUp