import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";

import { uiActions } from "../../store/ui";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.cart.totalQuantity);

  const showCount = count > 0;

  const toggleHandler = () => dispatch(uiActions.toggleCart());

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      {showCount && <span className={classes.badge}>{count}</span>}
    </button>
  );
};

export default CartButton;
