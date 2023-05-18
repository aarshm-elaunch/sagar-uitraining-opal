import React, { useState } from 'react';
import './style.scss';
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel, OutlinedInput } from '@mui/material';
import pic from '../assets/images/profile_pic.png';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
    const navigate = useNavigate()
    const [preview, setPreview] = useState()
    return (
        <Box className='edit_profile_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <Box className='edit_wrapper'>
                    <h2>Edit Profile</h2>
                    <Box className='edit_box'>
                        <Box className="profile_pic">
                            <Box className='img_wrapper'>
                                <img src={preview ? preview : pic} alt='pic' />
                                <IconButton
                                    variant="contained"
                                    component="label"
                                    className='btn_camera'
                                >
                                    <CameraAltIcon sx={{ fill: '#3B37DA', width: '18px', height: '18px' }} />
                                    <input type="file" hidden onChange={(e)=>setPreview(URL.createObjectURL(e.target.files[0]))}/>
                                </IconButton>
                            </Box>
                        </Box>
                        <Box className='feild_content'>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={4} sm={8} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-amount">First Name</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            className='input_field'
                                            label="First Name"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4} sm={8} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-amount">Second Name</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            className='input_field'
                                            label="Second Name"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4} sm={4} md={2}>
                                    <Button className='btn_theam2' onClick={()=>navigate('/profile')}>cancle</Button>
                                </Grid>
                                <Grid item xs={4} sm={4} md={3}>
                                    <Button className='btn_theam' onClick={()=>navigate('/profile')}>Save Changes</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default EditProfile;
