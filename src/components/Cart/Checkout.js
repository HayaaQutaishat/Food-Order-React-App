import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
const Checkout = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    valueIsInValid: nameIsInValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((enteredName) => enteredName.trim() !== "");

  const {
    enteredValue: enteredStreet,
    valueIsValid: streetIsValid,
    valueIsInValid: streetIsInValid,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput((enteredStreet) => enteredStreet.trim() !== "");

  const {
    enteredValue: enteredPostal,
    valueIsValid: postalIsValid,
    valueIsInValid: postalIsInValid,
    valueChangeHandler: postalChangeHandler,
    valueBlurHandler: postalBlurHandler,
    reset: resetPostal,
  } = useInput((enteredPostal) => enteredPostal.trim().length === 5);

  const {
    enteredValue: enteredCity,
    valueIsValid: cityIsValid,
    valueIsInValid: cityIsInValid,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput((enteredCity) => enteredCity.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmCheckoutHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    resetName();
    resetCity();
    resetPostal();
    resetStreet();
  };

  const nameClass = `${classes.control} ${
    nameIsInValid ? classes.invalid : ""
  }`;
  const streetClass = `${classes.control} ${
    streetIsInValid ? classes.invalid : ""
  }`;
  const postalClass = `${classes.control} ${
    postalIsInValid ? classes.invalid : ""
  }`;
  const cityClass = `${classes.control} ${
    cityIsInValid ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmCheckoutHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameIsInValid && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetIsInValid && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalIsInValid && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityIsInValid && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onHideCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
