import React from 'react';
import { render } from 'react-dom';
const audioRecording = require('../audio.js');

const Square = (props) => {

  return(<button id='action' onClick={() => {audioRecording.handleAction()}}>Click Me!</button>)
}

export default Square;