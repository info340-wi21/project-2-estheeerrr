import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import SAMPLE_DATA from './player.json';

ReactDOM.render(
  <React.StrictMode>
    <App player={SAMPLE_DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);