import React from 'react';

import { useRoutes } from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Policy from '../pages/Policy';
import Auction from '../pages/Auction';
import Product from '../pages/Product';
import Chat from '../pages/Chat';
import AuctionDetail from '../pages/AuctionDetail';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Stripe from '../pages/Stripe';
import ProductDetails from '../pages/ProductDetails';
import Podcast from '../pages/Podcast';
import WishList from '../pages/WishList';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Store from '../pages/Store';
import MyOrder from '../pages/MyOrder';
import VendorDetails from '../pages/VendorDetails';

const Router = () => {
    const element = useRoutes([
        {
          path: '/',
          element: <AuthLayout />,
          children: [
            {path: '/',element: <Login />}, 
          {
            path: 'signup',
            element: <SignUp />,
          }]
        },
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {path: 'home',element: <Home />}, 
            {path: 'about',element: <About />},
            {path: 'policy',element: <Policy />},
            {path: 'auction',element: <Auction />},
            {path: 'products',element: <Product />},
            {path: 'chat',element: <Chat />},
            {path: 'auctiondetail/:id',element: <AuctionDetail />},
            {path: 'profile',element: <Profile />},
            {path: 'editprofile',element: <EditProfile />},
            {path: 'stripe',element: <Stripe />},
            {path: 'productdetail/:id',element: <ProductDetails />},
            {path: 'podcast',element: <Podcast />},
            {path: 'wishlist',element: <WishList />},
            {path: 'cart',element: <Cart />},
            {path: 'checkout',element: <Checkout />},
            {path: 'store',element: <Store />},
            {path: 'myorder',element: <MyOrder />},
            {path: 'vendor/:id',element: <VendorDetails />},
          ]
        },
      ]);
      return element;
}

export default Router;



