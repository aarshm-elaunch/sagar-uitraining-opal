import './App.css';
import Router from './routes/Router';
import { CartContext } from './context/CartContext';
import { WishListContext } from './context/WishListContext';

const App = () => {
  return (
    <WishListContext>
      <CartContext>
        <Router />
      </CartContext>
    </WishListContext>
  )
}

export default App;
