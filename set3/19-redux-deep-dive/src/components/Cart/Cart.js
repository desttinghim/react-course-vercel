import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { cartActions } from "../../store/cart";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const incrementHandler = (item) => dispatch(cartActions.add(item));
  const decrementHandler = (id) => dispatch(cartActions.remove(id));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={incrementHandler.bind(null, item)}
            onDecrement={decrementHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
