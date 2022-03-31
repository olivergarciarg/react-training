import { useState, useEffect } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  // useEffect(() => {
  //   setFormIsValid(enteredNameIsValid);
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your eMail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
