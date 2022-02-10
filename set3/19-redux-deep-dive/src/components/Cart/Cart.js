import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { cartActions } from "../../store/cart";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const incrementHandler = (item) => dispatch(cartActions.add(item));
  const decrementHandler = (item) => dispatch(cartActions.remove(item));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.items.map((item, i) => (
          <CartItem
            key={i}
            item={item}
            onIncrement={incrementHandler.bind(null, item)}
            onDecrement={decrementHandler.bind(null, item)}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
