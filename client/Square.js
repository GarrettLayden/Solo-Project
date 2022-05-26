import React from 'react';
import { render } from 'react-dom';
const audioRecorder = require('../audio.js');

const Square = (props) => {

  return( <button className='Square' id={props.id} onClick={() => {audioRecorder.handleAction(props.id)}}>Start Recording</button>)
  // onMouseDown={() => {audioRecorder.handleAction()}} 
}

export default Square;