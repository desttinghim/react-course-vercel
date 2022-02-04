import React, { useState } from "react";

import { Card, Button } from "./UI";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const errors = [];
    if (enteredUsername.trim().length === 0) errors.push("Empty Username");
    if (enteredAge.trim().length === 0) errors.push("Empty Age");
    const age = Number(enteredAge);
    if (age <= 0) errors.push("Age must be a positive value");

    if (errors.length > 0) {
      props.onInputError(errors);
    } else {
      props.onNewUser({ username: enteredUsername, age });

      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUser;
