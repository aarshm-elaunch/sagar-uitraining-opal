import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import useCart from '../../hooks/useCart';
import { product_list } from '../../dummy_data';

const Price = ({data}) => {
    const {cartItems, updateCart} = useCart()
    const [val, setVal] = useState(1)
    console.log(val);
 
    const handleCartOnClick = () => {
        updateCart(data)
    }

    // const increes = () => {
    //     increesQty(data, val)
    // }

    useEffect(()=>{
        // increes();
    }, [val])

    console.log('product_list', cartItems);

    return (
        <Box className='price_wrapper'>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={4} sm={4} md={6}>
                    <h2>Item price</h2>
                    <p>${data?.price}</p>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                    <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className='inc_dec'>
                                <IconButton className='decreement'><RemoveOutlinedIcon /></IconButton>
                                {val}
                                <IconButton className='increement' onClick={()=>setVal(val+1)}><AddOutlinedIcon /></IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Button className='btn_theam' disabled={val === 0 ? true : false} onClick={handleCartOnClick}><ShoppingBagOutlinedIcon />Add to cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Price;
