import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

import SAMPLE_DATA from './player.json';

ReactDOM.render(<BrowserRouter><App player={SAMPLE_DATA}/></BrowserRouter>,
  document.getElementById('root')
);