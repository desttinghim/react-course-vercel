import React, { useState } from "react";

import { Card } from "./UI";

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
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUser;
