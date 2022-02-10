import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/UI/Button/Demo/Demo';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app running");

  const togglePHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevShowP) => !prevShowP);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={togglePHandler}>Show P</Button>
      <Demo show={showP}/>
    </div>
  );
}

export default App;
