import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiAction } from './store/ui-slice';

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
      const response = await fetch('https://react-http-training-84f9a-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error('Sending cart file failed')
      }

      const responseData = await response.json()

      dispatch(uiAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
    }
  }, [cart])

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
