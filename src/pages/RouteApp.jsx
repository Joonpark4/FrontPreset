import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
export default function RouteApp() {
  return (
    <div>
      {/* 아래에 main과 about을 링크할 수 있는 하이퍼링크 텍스트 navbar*/}
      <nav className='flex'>
        <Link to='/' ><h1>Home</h1></Link>
        {'       '}
        <Link to='/about' ><h1>About</h1></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
