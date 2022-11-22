import { useState } from "react";

const useInput = (validity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validity(enteredValue);
  const valueIsInValid = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    valueIsInValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
