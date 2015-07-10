'use strict';

import 'babel-core/polyfill';
import '../styles/main.scss';
import 'bootstrap-sass';
import React from 'react';
import App from './components/app.jsx';

React.render(
  <App />,
  document.getElementById('root')
);
