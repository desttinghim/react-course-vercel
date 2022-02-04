import React from "react";

import cardStyle from "./Card.module.css";
import buttonStyle from "./Button.module.css";
import modalStyle from "./Modal.module.css";

export const Card = (props) => {
  return (
    <div className={`${cardStyle.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export const Button = (props) => {
  return (
    <button
      className={buttonStyle.button}
      type={props.type ?? "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export const Modal = (props) => {
  return (
    <div className={modalStyle.backdrop} onClick={props.onOkay}>
      <Card className={modalStyle.modal}>
        <header className={modalStyle.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={modalStyle.content}>{props.message}</div>

        <footer className={modalStyle.actions}>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
