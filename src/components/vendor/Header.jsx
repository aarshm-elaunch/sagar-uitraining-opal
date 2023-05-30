import React from 'react';
import { Box } from '@mui/material';
import vender_img from '../../assets/images/vander_img.png';

const Header = ({data}) => {
    return (
        <Box className='header_wrapper'>
            <img src={vender_img} alt="background" />
            <Box className='title_wrapper1'>
                <Box className='img_wrapper'>
                <img src={data?.img} alt="dp" />
                </Box>
                <h2>{data?.name}</h2>
                <p>Uisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. </p><br/>
                <p style={{paddingBottom: '40px'}}>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
            </Box>
        </Box>
    );
}

export default Header;
