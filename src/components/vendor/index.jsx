import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import MainSection from './MainSection';
import { useParams } from 'react-router-dom';
import { storeList } from '../../dummy_data';

const Vendor = () => {
    const [venderData, setVenderData] = useState();
    const { id } = useParams();

    useEffect(() => {
        storeList.map((item) => item.id === id && setVenderData(item))
    })

    return (
        <Box>
            <Header data={venderData}/>
            <MainSection data={venderData} />
        </Box>
    );
}

export default Vendor;
