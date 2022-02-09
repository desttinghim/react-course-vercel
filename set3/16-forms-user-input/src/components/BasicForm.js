import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const firstNameInput = useInput((value) => value.trim() !== "");
  const lastNameInput = useInput((value) => value.trim() !== "");
  const emailInput = useInput((value) => value.includes("@"));

  const formIsValid =
    firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(firstNameInput.value, lastNameInput.value, emailInput.value);

    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={`form-control ${firstNameInput.hasError ? "invalid" : ""}`}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInput.valueChangeHandler}
            onBlur={firstNameInput.inputBlurHandler}
            value={firstNameInput.value}
          />
          {firstNameInput.hasError && (
            <p className="error-text">First name cannot be empty.</p>
          )}
        </div>
        <div
          className={`form-control ${lastNameInput.hasError ? "invalid" : ""}`}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInput.valueChangeHandler}
            onBlur={lastNameInput.inputBlurHandler}
            value={lastNameInput.value}
          />
          {lastNameInput.hasError && (
            <p className="error-text">Last name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailInput.hasError ? "invalid" : ""}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailInput.valueChangeHandler}
          onBlur={emailInput.inputBlurHandler}
          value={emailInput.value}
        />
        {emailInput.hasError && (
          <p className="error-text">Email must include an '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
