import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import StateProvider from './components/StateProvider.js'
import { reducer, initState } from './reducer.js'
import App from './App.js'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider reducer={reducer} initState={initState}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('react-app')
);