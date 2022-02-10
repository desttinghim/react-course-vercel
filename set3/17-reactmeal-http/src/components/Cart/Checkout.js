import { useState, useRef } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameValid = isEmpty(nameInputRef.current.value);
    const streetValid = isEmpty(streetInputRef.current.value);
    const postalValid = !isFiveChars(postalInputRef.current.value);
    const cityValid = isEmpty(cityInputRef.current.value);

    const formIsValid = nameValid && streetValid && postalValid && cityValid;

    if (!formIsValid) {
      setFormInputsValidity({
        name: nameValid,
        street: streetValid,
        postal: postalValid,
        city: cityValid,
      });
      return;
    }

    nameInputRef.current.value = "";
    streetInputRef.current.value = "";
    postalInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} id="name" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} id="street" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} id="postal" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} id="city" type="text" />
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
