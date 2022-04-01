import { useState, useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched};
  } else if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value};
  } else if (action.type === 'RESET') {
    return { value: '', isTouched: false};
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  // const valueIsValid = validateValue(enteredValue);
  // const hasError = !valueIsValid && isTouched;

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.action});
    // setEnteredValue(event.target.value);
  }

  const inputBlurHandler = () => {
    dispatch({type: 'BLUR'});
    // setIsTouched(true);
  }

  const reset = () => {
    dispatch({type: 'RESET'});
    // setEnteredValue('');
    // setIsTouched(false);
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput;