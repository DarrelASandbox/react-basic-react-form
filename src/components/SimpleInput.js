import { useState } from 'react';

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputNameIsTouched, setInputNameIsTouched] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);

  const inputNameIsValid = inputName.trim() !== '';
  const inputNameIsInvalid = !inputNameIsValid && inputNameIsTouched;
  const inputEmailIsValid = inputEmail.includes('@');
  const inputEmailIsInvalid = !inputEmailIsValid && inputEmailIsTouched;

  const inputNameHandler = (e) => setInputName(e.target.value);
  const inputNameBlurHandler = (e) => setInputNameIsTouched(true);
  const inputEmailHandler = (e) => setInputEmail(e.target.value);
  const inputEmailBlurHandler = (e) => setInputEmailIsTouched(true);

  let formIsValid = false;
  if (inputNameIsValid && inputEmailIsValid) formIsValid = true;

  const inputFormHandler = (e) => {
    e.preventDefault();
    setInputNameIsTouched(true);
    setInputEmailIsTouched(true);

    if (!inputNameIsValid || !inputEmailIsValid) return;
    console.log(inputName, inputEmail);

    setInputName('');
    setInputNameIsTouched(false);
    setInputEmail('');
    setInputEmailIsTouched(false);
  };

  const inputNameClasses = inputNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const inputEmailClasses = inputEmailIsInvalid
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
        {inputNameIsInvalid && (
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
        {inputEmailIsInvalid && (
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
