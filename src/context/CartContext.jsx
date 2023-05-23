import React, { createContext, useState } from 'react';

const Cart = createContext();

const CartContext = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const updateCart = (cartItem) => {
        const checked = cartItems.findIndex((item)=>item.id === cartItem.id) > -1
        !checked && setCartItems(prev => [...prev,cartItem]);
    }

    // const increesQty = (data) => {
    //     const checked = cartItems.findIndex((item)=>item.id === data.id) > -1 
    //     console.log(checked);
    // }
    
    return (
        <Cart.Provider value={{cartItems,updateCart}}>
            {children}
        </Cart.Provider>
    );
}

export {CartContext,Cart};
