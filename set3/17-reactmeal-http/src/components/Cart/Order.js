import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import useInput from "../../hooks/use-input";
import FormInput from "../UI/FormInput";

const Order = (props) => {
  // Form
  const nameInput = useInput((value) => value.trim() !== "");
  const addressInput = useInput((value) => value.trim() !== "");

  const formIsValid = nameInput.isValid && addressInput.isValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(nameInput.value, addressInput.value);

    nameInput.reset();
    addressInput.reset();
  };

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const orderForm = (
    <form onSubmit={submitHandler}>
      <FormInput
        label="Full Name"
        errorMessage="Name cannot be empty."
        inputHook={nameInput}
        input={{ id: "name" }}
      />
      <FormInput
        label="Addres"
        errorMessage="Address cannot be empty."
        inputHook={addressInput}
        input={{ id: "address" }}
      />
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={props.onClose}
        >
          Close
        </button>
        <button
          type="submit"
          className={classes.button}
          onClick={props.onOrder}
        >
          Confirm
        </button>
      </div>
    </form>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {orderForm}
    </Modal>
  );
};

export default Order;
