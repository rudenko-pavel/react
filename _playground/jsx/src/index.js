// Import the React and ReactDOM librares
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import First from './components/first/First';
import Clock from './components/clock/Clock';
import ViewList from './components/viewlist/ViewList';
import './index.scss';

ReactDOM.render(<First />, document.getElementById('first'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<ViewList />, document.getElementById('viewlist'));
