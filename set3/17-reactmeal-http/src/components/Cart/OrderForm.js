import useInput from "../../hooks/use-input";
import FormInput from "../UI/FormInput";

const OrderForm = (props) => {
  const nameInput = useInput((value) => value.trim() !== "");
  const addressInput = useInput((value) => value.trim() !== "");

  const formIsValid = nameInput.isValid && addressInput.isValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(nameInput.value, addressInput.value);

    nameInput.reset();
    addressInput.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput
        label="Full Name"
        errorMessage="Name cannot be empty."
        inputHook={nameInput}
        input={{ id: "name" }}
      />
      <FormInput
        label="Addres"
        errorMessage="Address cannot be empty."
        inputHook={addressInput}
        input={{ id: "address" }}
      />
    </form>
  );
};

export default OrderForm;
