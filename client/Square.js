import React from 'react';
import { render } from 'react-dom';
const audioRecording = require('../audio.js');

const Square = (props) => {

  return(<button id='action' onClick={() => {audioRecording.handleAction()}}>Click Me!</button>)
}

export default Square;

// figure out how to add more squares everytime a button is pressed
// figure out how to store audio by holding button
// figure out how to play audio by clicking button