'use strict';

import 'babel-core/polyfill';
import '../styles/main.scss';
import React from 'react';
import Visualization from './components/visualization.jsx';

var category = 'notifications';
var source = `data/${category}.json`;

React.render(
  <Visualization
    category={category}
    source={source}
  />,
  document.getElementById('visualization')
);
