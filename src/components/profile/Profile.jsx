import React from 'react';
import { Box, IconButton } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import pro_pic from '../../assets/images/profile_pic.png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    return (
        <Box className='profile_head'>
            <h1>Profile</h1>
            <Box className='profile_main'>
                <Box className='img_wrapper'><img src={pro_pic} alt='profile' /></Box>
                <Box className="text_detail">
                    <Box className='details'>
                        <h2>Peter Mckinnon</h2>
                        <p>petermckinnon@email.com</p>
                    </Box>
                    <IconButton className='btn_icn' onClick={()=>navigate('/editprofile')}><BorderColorOutlinedIcon sx={{ fill: '#554F67' }} /></IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Profile;
