import React from 'react';

const MyP = (props) => {
  console.log("MyP running");

  return (
    <p>{props.children}</p>
  );
};

export default MyP;