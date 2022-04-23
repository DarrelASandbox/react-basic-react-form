import { useState } from 'react';

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputNameIsTouched, setInputNameIsTouched] = useState(false);

  const inputNameIsValid = inputName.trim() !== '';
  const inputNameIsInvalid = !inputNameIsValid && inputNameIsTouched;

  const inputNameHandler = (e) => setInputName(e.target.value);
  const inputNameBlurHandler = (e) => setInputNameIsTouched(true);

  const inputFormHandler = (e) => {
    e.preventDefault();
    setInputNameIsTouched(true);
    if (!inputNameIsValid) return;
    console.log(inputName);
    setInputName('');
    setInputNameIsTouched(false);
  };

  const inputNameClasses = inputNameIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
