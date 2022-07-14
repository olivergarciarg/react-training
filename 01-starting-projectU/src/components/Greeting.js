import { useState } from "react";
import Output from "./OutPut";
import Async from "./Async";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {changedText ? <Output>Changed!</Output> : <Output>it's good to see you!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
      <Async/>
    </div>
  )
}

export default Greeting;
