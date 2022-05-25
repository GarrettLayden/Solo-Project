import React, { useState, useEffect } from 'react';
import Square from './Square.js';
const audioRecording = require('../audio.js');

// holds a method that will be passed down to each square
// has a button that will make more squares
// 


// function update () {
//   const [value, setValue] = useState(0);
//   return () => setValue(value => value + 1);
// }


let numOfSquares = 1;

const SquareContainer = props => {  

  const [squareArray, setSquareArray] = useState([]);

  return (
    <div>
      <button id='add' onClick={() => setSquareArray([...squareArray, <Square id={numOfSquares++} key={numOfSquares}/>])}>Add Recording</button>
      <button id='delete' onClick={() => setSquareArray([])}>Delete Recordings</button>
      {squareArray}
    </div>
  )
}

export default SquareContainer;