import React, { useState } from "react";

import NewUser from "./NewUser";
import { Card, Modal } from "./UI";

import UserListStyle from "./UserList.module.css";

const User = (props) => {
  return (
    <div>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </div>
  );
};

const UserList = (props) => {
  return (
    <Card className={UserListStyle.users}>
      <ul>
        {props.items.map((user) => (
          <li key={user.username}>
            <User username={user.username} age={user.age} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

function App() {
  const [users, setUsers] = useState([]);
  const [showInputModal, setShowInputModal] = useState("");

  const newUserHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  const inputErrorHandler = (errors) => {
    setShowInputModal(errors.map((error, i) => <p key={i}>{error}</p>));
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
