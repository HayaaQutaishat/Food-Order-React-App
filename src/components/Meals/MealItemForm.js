import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        id="amount"
        type="number"
        min="1"
        max="5"
        step="1"
        label="Amount"
        defaultValue="1"
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
