import React, { useCallback } from 'react';
// import { handleClick } from 'react';
import { render } from 'react-dom';
// import { Component } from 'react/cjs/react.production.min';
// import Square from './Square.js';
import SquareContainer from './SquareContainer.js';
const audioRecording = require('../audio.js');

import './styles.css';

const App = props => {
  return(
    <div>
      <SquareContainer/>
    </div>
  )
};

export default App;