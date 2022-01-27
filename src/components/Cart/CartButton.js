import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const totalQ = useSelector(state => state.cart.totalQuantity)

  const toggleCartHandle = () => {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQ}</span>
    </button>
  );
};

export default CartButton;
