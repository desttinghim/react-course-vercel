import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const count = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const showCount = count > 0;

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      {showCount && <span className={classes.badge}>{count}</span>}
    </button>
  );
};

export default CartButton;
