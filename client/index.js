import React from 'react';
import { render } from 'react-dom';
// import SquareContainer from './SquareContainer.js';
import App from './App.js'

render(
  <div>
    <h2>Start Session</h2>
    <App />
  </div>,
  document.querySelector('#app')
);