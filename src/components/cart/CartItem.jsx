import React from 'react';
import { Box, Divider, IconButton } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const CartItem = ({data}) => {
    return (
        <Box>
            <Box className='item_details'>
                <img src={data.image} alt="sds" />
                <Box className='product_detail'>
                    <Box className='title_main'>
                        <h4>Item 1 name here</h4>
                        <Box className='inc_dec'>
                            <IconButton className='decreement'><RemoveOutlinedIcon /></IconButton>
                            {data.qty}
                            <IconButton className='increement'><AddOutlinedIcon /></IconButton>
                        </Box>
                    </Box>
                    <p>${(data.price)*(data.qty)}</p>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
}

export default CartItem;
