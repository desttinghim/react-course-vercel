import { useContext, useState, useEffect } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

import useHttp from "../../hooks/use-http";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  // const orderRequest = useHttp();
  // const sendOrderRequest = orderRequest.sendRequest;

  // useEffect(() => {
  //   const transformOrder = {};

  //   sendOrderRequest(
  //     {
  //       url: "https://react-http-3d4aa-default-rtdb.firebaseio.com/orders.json",
  //       method: 'POST',
  //       body: ,
  //       headers:
  //     },

  //   );
  // }, [sendOrderRequest]);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cancelOrderHandler = () => {
    setIsCheckout(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = !isCheckout && (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={cancelOrderHandler} />}
      {modalActions}
    </Modal>
  );
};

export default Cart;
