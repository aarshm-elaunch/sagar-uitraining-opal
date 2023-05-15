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
      ]
    },
  ]);
  return element;
}

export default App;
