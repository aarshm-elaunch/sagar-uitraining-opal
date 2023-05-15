import React from 'react';
import '../components/home/style.scss';
import Banner from '../components/home/Banner';
import LiveAuction from '../components/home/LiveAuction';
import Product from '../components/home/Product';
import Podcast from '../components/home/Podcast';
import MainFooter from '../Layouts/MainFooter';

const Home = () => {
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
