import React, { useContext } from 'react';
import { Cart } from '../context/CartContext';

const useCart = () => {
    const context = useContext(Cart)
    return context
    
}

export default useCart;
