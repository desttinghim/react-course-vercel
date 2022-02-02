import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// className instead of class, because this gets compiled down to javascript
const ExpenseItem = (props) => {
  // function clickHandler()
  // State is per component instance
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // End event listeners with Handler
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
