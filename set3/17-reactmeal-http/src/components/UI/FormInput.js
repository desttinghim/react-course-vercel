import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const input = props.inputHook;
  return (
    <div className={classes["form-control"]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        value={input.value}
        onChange={input.valueChangeHandler}
        onBlur={input.inputBlurHandler}
        {...props.input}
      />
      {input.hasError && (
        <p className={classes["error-text"]}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
