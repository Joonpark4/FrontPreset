import React from 'react';
import '../scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
export default function RouteApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
