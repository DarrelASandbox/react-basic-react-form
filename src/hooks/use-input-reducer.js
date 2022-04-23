import { useReducer } from 'react';

const initialInputState = { value: '', inputValueIsTouched: false };
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      return {
        value: action.value,
        inputValueIsTouched: state.inputValueIsTouched,
      };

    case 'INPUT_BLUR':
      return { value: state.value, inputValueIsTouched: true };

    case 'INPUT_RESET':
      return initialInputState;

    default:
      return initialInputState;
  }
};

const useInputReducer = (validateValue) => {
  const [inputValueState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const inputValueIsValid = validateValue(inputValueState.value);
  const inputValueError =
    !inputValueIsValid && inputValueState.inputValueIsTouched;

  const inputValueHandler = (e) =>
    dispatch({ type: 'INPUT_VALUE', value: e.target.value });

  const inputValueBlurHandler = () => dispatch({ type: 'INPUT_BLUR' });
  const inputValueReset = () => dispatch({ type: 'INPUT_RESET' });

  return [
    { inputValueIsValid, inputValueReset },
    {
      value: inputValueState.value,
      inputValueError,
      onChange: inputValueHandler,
      onBlur: inputValueBlurHandler,
    },
  ];
};

export default useInputReducer;
