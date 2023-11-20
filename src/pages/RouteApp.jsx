import React from 'react';
import '../scss/style.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
export default function RouteApp() {
  return (
    <div>
      {/* 아래에 main과 about을 링크할 수 있는 하이퍼링크 텍스트 navbar*/}
      <nav>
        <Link to='/' >Home</Link>
        {'       '}
        <Link to='/about' >About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
