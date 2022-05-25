import React from 'react';
import { render } from 'react-dom';
const audioRecording = require('../audio.js');

const Square = (props) => {

  return( <button className='Square' id={props.id} onClick={() => {audioRecording.handleAction(props.id)}}>Start Recording</button>)
  // onMouseDown={() => {audioRecording.handleAction()}} 
}

export default Square;

// figure out how to add more squares everytime a button is pressed
// figure out how to store audio by holding button
// figure out how to play audio by clicking button