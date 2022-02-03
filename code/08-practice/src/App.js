import React, { useState } from "react";
import "./App.css";

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

const User = (props) => {
  return (
    <p>
      {props.username} ({props.age} years old)
    </p>
  );
};

const UserList = (props) => {
  return (
    <Card>
      {props.items.map((user) => (
        <User key={user.username} username={user.username} age={user.age} />
      ))}
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onOkay}>Okay</button>
    </Card>
  );
};

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

function App() {
  const [users, setUsers] = useState([{ username: "hello", age: 1000 }]);
  const [showInputModal, setShowInputModal] = useState("");

  const newUserHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  const inputErrorHandler = (errors) => {
    setShowInputModal(errors.map((error) => <p>{error}</p>));
  };

  const onModalOkayHandler = () => {
    setShowInputModal("");
  };

  const modal =
    showInputModal.length > 0 ? (
      <Modal
        title="Invalid Input"
        message={showInputModal}
        onOkay={onModalOkayHandler}
      />
    ) : null;

  return (
    <div className="App">
      <NewUser onInputError={inputErrorHandler} onNewUser={newUserHandler} />
      <UserList items={users} />
      {modal ?? modal}
    </div>
  );
}

export default App;
