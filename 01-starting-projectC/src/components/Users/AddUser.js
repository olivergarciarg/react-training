import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const agetChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="title" message="message"/>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUserName}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={agetChangeHandler} value={enteredAge}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
    
  );
  
};

export default AddUser;