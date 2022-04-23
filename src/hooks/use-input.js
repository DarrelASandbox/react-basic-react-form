import { useState } from 'react';

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueIsTouched, setInputValueIsTouched] = useState(false);

  const inputValueIsValid = validateValue(inputValue);
  const inputValueError = !inputValueIsValid && inputValueIsTouched;

  const inputValueHandler = (e) => setInputValue(e.target.value);
  const inputValueBlurHandler = (e) => setInputValueIsTouched(true);
  const inputValueReset = () => {
    setInputValue('');
    setInputValueIsTouched(false);
  };

  return {
    inputValue,
    inputValueIsValid,
    inputValueError,
    inputValueHandler,
    inputValueBlurHandler,
    inputValueReset,
  };
};

export default useInput;
