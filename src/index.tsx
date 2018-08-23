import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Admin from './mooc-admin';
import Router from './router'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
