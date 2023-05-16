import React, { useState } from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Modal,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../assets/images/logo1.png'
import google from '../assets/images/google.png'
import { useNavigate } from 'react-router-dom';
import theme from '../theme/theme';

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

const SignUp = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
        <Container>
            <Box sx={{ display: {lg: 'flex', md: 'flex', sm: 'block'}, alignItems: 'center', justifyContent: 'space-between',  mt: '60px' }}>
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


                        <Box sx={{ display: {lg: 'flex', md: 'flex', sm: 'flex'}, gap: '16px', mt: '32px' }}>
                            <TextField id="outlined-basic" variant="outlined" placeholder='First Name' sx={{ width: '100%', borderRadius: '8px', "&:hover": { backgroundColor: '#ffffff', border: '0' } }} />
                            <TextField id="outlined-basic" variant="outlined" placeholder='Last Name' sx={{ width: '100%', borderRadius: '8px', "&:hover": { backgroundColor: '#ffffff', border: '0' }, mt: {lg: '0', md: '0', sm: '0', xs: '24px'} }} />
                        </Box>
                        <TextField id="outlined-basic" variant="outlined" placeholder='Email address' sx={{ m: '24px 0', width: '100%', borderRadius: '8px', "&:hover": { backgroundColor: '#ffffff', border: '0' } }} />
                        <FormControl sx={{ width: '100%', borderRadius: '8px', "&:hover": { backgroundColor: '#ffffff', border: '0' } }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
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
                            />
                        </FormControl>

                        <Box sx={{ display: 'flex', alignItems: 'center', m: '24px 0 8px 0' }}>
                            <FormControlLabel control={<Checkbox />} label="I agree to" sx={{ mr: '5px' }} />
                            <Typography sx={{
                                color: '#3B37DA',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}>Terms and Conditions</Typography>
                        </Box>

                        <Button variant='contained' sx={{
                            // background: theme.palette.primary.main,
                            "&:hover": { backgroundColor: '#3B37DA' },
                            width: '100%',
                            height: '48px',
                            borderRadius: '12px',
                            m: '32px 0',
                            color: '#fff',
                            gap: '5px',
                            textTransform: 'capitalize'
                        }} onClick={() => handleOpen()}>Sign Up</Button>

                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography> Don't have an account yet? </Typography>
                            <Typography sx={{ color: '#3B37DA', fontWeight: '400', cursor: 'pointer' }} onClick={() => navigate('/')}>Login here</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: {lg: 'flex', md: 'flex', sm: 'none', xs: 'none'}, alignItems: 'center', justifyContent: 'center' }}>
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
                    <Typography sx={{textAlign: 'center', fontSize: '24px', fontWeight: '700'}}>
                        We have sent you a verification link
                    </Typography>
                    <Typography sx={{ mt: '16px', textAlign: 'center', fontSize: '13px', color: '#554F67' }}>
                        Open the link we sent you in the email to verify your account
                    </Typography>
                    <Box sx={{display: {lg: 'flex', md: 'flex', sm: 'flex', xs: 'block'}, alignItems: 'center', justifyContent: 'space-between', mt: '24px', gap: '15px'}}>
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
                            mt: {lg: '0', md: '0', sm: '0', xs: '10px'}
                        }} onClick={()=>handleClose()}>Okay</Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
        </Box>

    )
}

export default SignUp