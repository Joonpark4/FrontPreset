import React from 'react';
import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import RouteApp from './pages/RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RouteApp />
   </Router>
);
