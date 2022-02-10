import React, { useState} from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/UI/Button/Demo/Demo';

function App() {
  const [showP, setShowP] = useState(false);

  console.log("app running");

  const togglePHandler = () => {
    setShowP((prevShowP) => !prevShowP);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={togglePHandler}>Show P</Button>
      <Demo show={showP}/>
    </div>
  );
}

export default App;
