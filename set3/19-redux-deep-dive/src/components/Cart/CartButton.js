import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";

import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const showCount = count > 0;

  const toggleHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      {showCount && <span className={classes.badge}>{count}</span>}
    </button>
  );
};

export default CartButton;
