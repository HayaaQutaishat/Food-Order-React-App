import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
        value={props.value}
      />
    </div>
  );
};

export default Input;
