import React, { useState } from "react";
import "./App.css";

import NewUser from "./NewUser";
import { Card, Modal } from "./UI";

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
