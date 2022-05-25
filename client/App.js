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

  return(
    <div>
      <Square />
    </div>
  )
};

// App.prototype.handleClick = useCallback((e) => {
//   console.log('it fucking works')
// });

export default App;