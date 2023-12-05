import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const menuList = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className="header">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <nav className="nav">
        {menuList.map((list, index) => (
          <Link
            key={index}
            to={list.to}>
            {list.label}
          </Link>
        ))}
        <Link to="login" className="LoginBtn">
          로그인
        </Link>
      </nav>
    </header>
  );
}
