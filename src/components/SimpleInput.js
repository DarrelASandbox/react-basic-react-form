import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [inputName, setInputName] = useState('');
  const [inputNameIsValid, setInputNameIsValid] = useState(false);
  const [inputNameIsTouched, setInputNameIsTouched] = useState(false);

  const inputNameHandler = (e) => {
    setInputName(e.target.value);
    if (e.target.value.trim() !== '') setInputNameIsValid(true);
  };

  const inputNameBlurHandler = (e) => {
    setInputNameIsTouched(true);
    if (inputName.trim() === '') setInputNameIsValid(false);
  };

  const inputFormHandler = (e) => {
    e.preventDefault();
    setInputNameIsTouched(true);

    console.log(inputName);

    // console.log(hobbyInputRef.current.value);
  };

  const inputNameIsInvalid = !inputNameIsValid && inputNameIsTouched;
  const inputNameClasses = inputNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={inputFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onBlur={inputNameBlurHandler}
          onChange={inputNameHandler}
          value={inputName.name}
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
