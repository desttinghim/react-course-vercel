import { useState, useRef } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameValid = !isEmpty(nameInputRef.current.value);
    const streetValid = !isEmpty(streetInputRef.current.value);
    const postalValid = isFiveChars(postalInputRef.current.value);
    const cityValid = !isEmpty(cityInputRef.current.value);

    setFormInputsValidity({
      name: nameValid,
      street: streetValid,
      postal: postalValid,
      city: cityValid,
    });

    const formIsValid = nameValid && streetValid && postalValid && cityValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postal: postalInputRef.current.value,
      city: cityInputRef.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} id="name" type="text" />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} id="street" type="text" />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} id="postal" type="text" />
        {!formInputsValidity.postal && (
          <p>Please enter a valid postal code (5 characters)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} id="city" type="text" />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
