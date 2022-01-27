import React, {useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from './AddUser.module.css'

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || +enteredUserAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Enter a valid input'
      })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // setEnteredUserName('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const agetChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input 
            id="username" 
            type="text" 
            // onChange={usernameChangeHandler} 
            // value={enteredUserName}
            ref={nameInputRef}/>
          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age" 
            type="number" 
            // onChange={agetChangeHandler} 
            // value={enteredAge}
            ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
    
  );
  
};

export default AddUser;