// write code for Welcome component here
import React from 'react';
const Welcome = (props) => {
  //   let hi = `Hay ${name}`;
  //   let greeting = `Welcome to Newton School.`;
  return (
    <div>
      <h1>Hey {props.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </div>
  );
};

export default Welcome;
