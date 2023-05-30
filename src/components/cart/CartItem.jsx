import React, { useEffect, useState } from 'react';
import { Box, Divider, IconButton } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import useCart from '../../hooks/useCart';

const CartItem = ({data}) => {
    const {cartItems, updateQty} = useCart()
    const [datas, setdatas] = useState();
    const [val, setVal] = useState(1)

    const increes = (item) => {
        updateQty(item, val)
    }

    useEffect(()=>{
        increes(data);
    }, [val]);

    useEffect(()=>{
        if(cartItems.length){
            cartItems.map((item)=>item?.id === data?.id ? setVal(item?.qty) : setdatas(data))
        }
    }, [])

    return (
        <Box>
            <Box className='item_details'>
                <img src={data.image} alt="sds" />
                <Box className='product_detail'>
                    <Box className='title_main'>
                        <h4>Item 1 name here</h4>
                        <Box className='inc_dec'>
                            <IconButton className='decreement' disabled={val === 0 ? true : false} onClick={()=>setVal(val-1)}><RemoveOutlinedIcon /></IconButton>
                            {data.qty}
                            <IconButton className='increement' onClick={()=>setVal(val+1)}><AddOutlinedIcon /></IconButton>
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
