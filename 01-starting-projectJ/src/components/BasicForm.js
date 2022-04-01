import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLName,
    isValid: lnameIsValid,
    hasError: lnameError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const nameInputClasses = nameError? 'form-control invalid' : 'form-control';
  const lnameInputClasses = lnameError? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailError? 'form-control invalid' : 'form-control';

  const formIsValid = nameIsValid && lnameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted', enteredName, enteredLName, enteredEmail);

    resetName();
    resetLName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameError && (
            <p className="error-text">name must not be empty</p>
          )}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input 
            type='text' 
            id='lname' 
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            value={enteredLName}
          />
          {lnameError && (
            <p className="error-text">last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='text' 
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} 
        />
        {emailError && (
          <p className="error-text">enter a valid email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
