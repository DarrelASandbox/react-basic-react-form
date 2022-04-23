import useInput from '../hooks/use-input';
import Input from './Input';

const SimpleInput = (props) => {
  const inputNameValidation = (value) => value.trim() !== '';
  const inputEmailValidation = (value) => /.{3,}@.{3,}\.com/.test(value);

  const formGet = (...inputValueStates) => {
    const formIsValid = inputValueStates.reduce(
      (prev, curr) => prev && curr.inputValueIsValid,
      true
    );

    const formReset = () => {
      for (let inputValueState of inputValueStates) {
        inputValueState.inputValueReset();
      }
    };
    return { formIsValid, formReset };
  };

  const [inputNameStates, inputNameProps] = useInput(inputNameValidation);
  const [inputEmailStates, inputEmailProps] = useInput(inputEmailValidation);
  const { formIsValid, formReset } = formGet(inputNameStates, inputEmailStates);

  const inputFormHandler = (e) => {
    e.preventDefault();
    console.log(inputNameProps.value, inputEmailProps.value);
    formReset();
  };

  return (
    <form onSubmit={inputFormHandler}>
      <Input
        type="text"
        id="name"
        errorText="Please enter your name."
        {...inputNameProps}
      />
      <Input
        type="text"
        id="email"
        errorText="Please enter your email."
        {...inputEmailProps}
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
