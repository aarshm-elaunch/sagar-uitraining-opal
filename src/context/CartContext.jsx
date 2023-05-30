import React, { createContext, useState } from 'react';

const Cart = createContext();

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const updateCart = (cartItem, qty) => {
        const checked = cartItems.findIndex((item) => item.id === cartItem.id) > -1
        !checked && setCartItems(prev => [...prev, { ...cartItem, 'qty': qty, 'total': cartItem?.price * qty }]);
    }

    const updateQty = (data, val) => {
        const updateState = cartItems?.map((item)=>{
            if(item?.id === data?.id){
                return {...item, 'qty': val, 'total': data?.price*val};
            }
            return item
        })
        setCartItems(updateState);

    }


    return (
        <Cart.Provider value={{ cartItems, updateCart, updateQty }}>
            {children}
        </Cart.Provider>
    );
}

export { CartContext, Cart };
