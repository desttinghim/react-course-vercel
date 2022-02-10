import useInput from "../../hooks/use-input";
import FormInput from "../UI/FormInput";

const OrderForm = (props) => {
  const nameInput = useInput((value) => value.trim() !== "");

  const formIsValid = nameInput.isValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput
        label="Full Name"
        inputHook={nameInput}
        input={{ id: "name" }}
      />
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          type="text"
          value={nameInput.value}
          onChange={nameInput.valueChangeHandler}
          onBlur={nameInput.inputBlurHandler}
        />
        {nameInput.hasError && <p>Name cannot be empty.</p>}
      </div>
    </form>
  );
};

export default OrderForm;
