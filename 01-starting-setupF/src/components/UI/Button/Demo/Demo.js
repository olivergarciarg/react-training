import React from 'react';
import MyP from './MyP';

const Demo = (props) => {
  console.log("demo running");

  return (
    
    <MyP>{props.show ? 'this is new' : ''}</MyP>
  );
};

export default React.memo(Demo);