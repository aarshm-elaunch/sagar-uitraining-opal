import './App.css';
import { useRoutes } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Policy from './pages/Policy';
import Auction from './pages/Auction';
import Product from './pages/Product';
import Chat from './pages/Chat';
import AuctionDetail from './pages/AuctionDetail';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Stripe from './pages/Stripe';

const App = () => {
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
        {path: 'auctiondetail',element: <AuctionDetail />},
        {path: 'profile',element: <Profile />},
        {path: 'editprofile',element: <EditProfile />},
        {path: 'stripe',element: <Stripe />},
      ]
    },
  ]);
  return element;
}

export default App;
