import React, { createContext, useState } from 'react';

const fevorite = createContext();

const WishListContext = ({ children }) => {
    const [fevoriteItems, setFevoriteItems] = useState([]);

    const updateItems = (value, data) => {
        const remove = fevoriteItems.filter((item) => item.id !== data.id);
        value ? setFevoriteItems(prev => [...prev, {...data, 'fevorite': value}]) : setFevoriteItems(remove)
    }

    return (
        <fevorite.Provider value={{ fevoriteItems, updateItems }}>
            {children}
        </fevorite.Provider>
    );
}

export { fevorite, WishListContext };
