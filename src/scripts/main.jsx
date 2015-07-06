'use strict';

import '../styles/main.scss';
import React from 'react';
import Visualization from './components/visualization.jsx';

React.render(
  <Visualization source="data/notifications.json" />,
  document.getElementById('visualization')
);
