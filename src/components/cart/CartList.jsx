import React from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, IconButton } from '@mui/material';
import CartItem from './CartItem';
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const CartList = () => {
    const navigate = useNavigate()
    const { cartItems } = useCart();

    console.log(cartItems);

    const total = () => {
        let subTotal = 0;
        cartItems.map((item)=>subTotal =  subTotal + item.total)
        return subTotal;
    }

    console.log(total());

    return (
        !cartItems.length ?
            <Box className='empty_cart'>
                <h2>You need to add a product in the cart</h2>
            </Box>:
        <Box className='cartlist_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <h2>Cart</h2>
                <Box className='item_wrapper'>
                    <h3>Purchase items</h3>
                    {cartItems.map((data) =>
                        <CartItem data={data} />
                    )}
                    <Box className='total'>
                        <h2>Sub Total</h2>
                        <h2>${total()}</h2>
                    </Box>
                </Box>
                <Box className='form'>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label="Make your own parcel"
                        />
                    </FormGroup>
                    <Button className='btn_theam' onClick={()=>navigate('/checkout')}>Checkout</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default CartList;
