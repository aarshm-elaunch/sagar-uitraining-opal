import React, { useContext } from 'react';
import { fevorite } from '../context/WishListContext';

const useWishList = () => {
    const context = useContext(fevorite)
    return context
}

export default useWishList;
