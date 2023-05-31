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
    OutlinedInput,
    Typography
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../assets/images/logo1.png'
import google from '../assets/images/google.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
            <Container sx={{ minWidth: '80%' }}>
                <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'block' }, alignItems: 'center', justifyContent: 'space-between', mt: '60px' }}>
                    <Box sx={{ background: '#fff', padding: '48px', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '35px', fontWeight: '700', mb: '16px' }}>Login</Typography>
                        <Typography>Login with Email or Google Account</Typography>

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
                        }}><img src={google} alt="logo" />Login with Google</Button>

                        <Divider sx={{ mb: '8px' }}>Login With Email</Divider>


                        <FormControl fullWidth sx={{ margin: '24px 0' }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Email address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                className='input_field'
                                label="Email address"
                                sx={{ borderRadius: '10px' }}
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
                            />
                        </FormControl>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: '24px 0 8px 0', flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' } }}>
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                            <Typography sx={{
                                color: '#3B37DA',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}>Forgot Password?</Typography>
                        </Box>

                        <Button sx={{
                            background: '#3B37DA',
                            "&:hover": { backgroundColor: '#3B37DA' },
                            width: '100%',
                            height: '48px',
                            borderRadius: '12px',
                            m: '32px 0',
                            color: '#fff',
                            gap: '5px',
                            textTransform: 'capitalize'
                        }} onClick={() => navigate('/home')}>Login</Button>


                        <Box sx={{ display: 'flex', gap: '5px', flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' } }}>
                            <Typography> Don't have an account yet? </Typography>
                            <Typography sx={{ color: '#3B37DA', fontWeight: '400', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Register here</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, alignItems: 'center', justifyContent: 'center' }} margin='auto'>
                        <img src={logo} alt="logo" />
                    </Box>
                </Box>
            </Container>
        </Box>

    )
}

export default Login