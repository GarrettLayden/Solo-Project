import React, { useCallback } from 'react';
// import { handleClick } from 'react';
import { render } from 'react-dom';
// import { Component } from 'react/cjs/react.production.min';
import Square from './Square.js';

import './styles.css';


const App = props => {
  const handleClick = (e) => {
    console.log('it fucking works')
  }
  
  //useCallback((e) => {
  //   console.log('it fucking works')
  // });
  const square = [<Square />];

  const addAudio = (e) => {
    const newSquare = <Square />;
    square.push(newSquare);
  }

  return(
    <div>
      <button id="add" onClick={() => console.log(addAudio())}>Add recording</button>
      {square}
    </div>
  )
};

export default App;