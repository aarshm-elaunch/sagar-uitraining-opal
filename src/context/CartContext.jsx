import React, { createContext, useState } from 'react';

const Cart = createContext();

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [prod, setProd] = useState();

    const updateCart = (cartItem, qty) => {
        const checked = cartItems.findIndex((item) => item.id === cartItem.id) > -1
        setCartItems(prev => [...prev, cartItem]);
    }

    const increesQty = (data, val) => {
        setProd({...data, 'qty': val, 'total': data?.price * val});
    }


    return (
        <Cart.Provider value={{ cartItems, updateCart, increesQty }}>
            {children}
        </Cart.Provider>
    );
}

export { CartContext, Cart };
