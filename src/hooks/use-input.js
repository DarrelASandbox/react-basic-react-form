import { useState } from 'react';

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueIsTouched, setInputValueIsTouched] = useState(false);

  const inputValueIsValid = validateValue(inputValue);
  const inputValueError = !inputValueIsValid && inputValueIsTouched;

  const inputValueHandler = (e) => setInputValue(e.target.value);
  const inputValueBlurHandler = () => setInputValueIsTouched(true);
  const inputValueReset = () => {
    setInputValue('');
    setInputValueIsTouched(false);
  };

  return [
    { inputValueIsValid, inputValueReset },
    {
      value: inputValue,
      inputValueError,
      onChange: inputValueHandler,
      onBlur: inputValueBlurHandler,
    },
  ];
};

export default useInput;
