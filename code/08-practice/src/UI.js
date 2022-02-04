import React from "react";

import cardStyle from "./Card.module.css";
import buttonStyle from "./Button.module.css";

export const Modal = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onOkay}>Okay</button>
    </Card>
  );
};

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
