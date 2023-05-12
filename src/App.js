import './App.css';
import { useRoutes } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';

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
      ]
    },
  ]);
  return element;
}

export default App;
