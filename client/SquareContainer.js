import React, { useState, useEffect } from 'react';
import Square from './Square.js';

// holds a method that will be passed down to each square
// has a button that will make more square 

let numOfSquares = 1;

const SquareContainer = props => {  

  const [squareArray, setSquareArray] = useState([]);

  return (
    <div className='bigBoard'>
      <div className='buttonsBox'>
          <button id='add' onClick={() => setSquareArray([...squareArray, <Square id={numOfSquares++} key={numOfSquares}/>])}>Add Recording</button>
          <button id='delete' onClick={() => setSquareArray([])}>Delete Recordings</button>
        <div className='board'>
          {squareArray}
        </div>
      </div>
    </div>
  )
}

export default SquareContainer;