import React from "react";

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
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
