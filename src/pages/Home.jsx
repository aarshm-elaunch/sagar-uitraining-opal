import React, { useEffect, useState } from 'react';
import '../components/home/style.scss';
import Banner from '../components/home/Banner';
import LiveAuction from '../components/home/LiveAuction';
import Product from '../components/home/Product';
import Podcast from '../components/home/Podcast';
import MainFooter from '../Layouts/MainFooter';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState();
    useEffect(() => {
        const item = localStorage.getItem('credintial');
        if (!item) {
         navigate('/')
        }
      }, []);
    return (
        <>
            <Banner />
            <LiveAuction />
            <Product />
            <Podcast />
            <MainFooter />
        </>
    );
}

export default Home;
