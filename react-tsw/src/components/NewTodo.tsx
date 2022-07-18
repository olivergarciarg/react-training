import React, {useContext, useRef} from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText.trim());
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>add todo</button>
    </form>
  )
}

export default NewTodo;