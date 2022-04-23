import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    inputValue: inputName,
    inputValueIsValid: inputNameIsValid,
    inputValueError: inputNameError,
    inputValueHandler: inputNameHandler,
    inputValueBlurHandler: inputNameBlurHandler,
    inputValueReset: inputNameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    inputValue: inputEmail,
    inputValueIsValid: inputEmailIsValid,
    inputValueError: inputEmailError,
    inputValueHandler: inputEmailHandler,
    inputValueBlurHandler: inputEmailBlurHandler,
    inputValueReset: inputEmailReset,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (inputNameIsValid && inputEmailIsValid) formIsValid = true;

  const inputFormHandler = (e) => {
    e.preventDefault();

    if (!inputNameIsValid || !inputEmailIsValid) return;
    console.log(inputName, inputEmail);

    inputNameReset();
    inputEmailReset();
  };

  const inputNameClasses = inputNameError
    ? 'form-control invalid'
    : 'form-control';

  const inputEmailClasses = inputEmailError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={inputFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={inputNameBlurHandler}
          onChange={inputNameHandler}
          value={inputName}
        />
        {inputNameError && (
          <p className="error-text">Please enter your name.</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onBlur={inputEmailBlurHandler}
          onChange={inputEmailHandler}
          value={inputEmail}
        />
        {inputEmailError && (
          <p className="error-text">Please enter your email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
