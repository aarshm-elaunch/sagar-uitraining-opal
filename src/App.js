import './App.css';
import { useRoutes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    }
  ]);
  return element;
}

export default App;
