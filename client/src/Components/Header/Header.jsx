import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

const nav_links = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '#service',
    display: 'Service',
  },
  {
    path: '#contact',
    display: 'Contact',
  },
];

export default function Header({ theme, toggleTheme }) {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add('header_shrink');
    } else {
      headerRef.current.classList.remove('header_shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('menu_active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>BrightSpark Digital Marketing</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li key={index} className="menu_item">
                  {item.path.startsWith('/') ? (
                    <Link to={item.path} className="menu_link">
                      {item.display}
                    </Link>
                  ) : (
                    <a href={item.path} onClick={(e) => handleClick(e)} className="menu_link">
                      {item.display}
                    </a>
                  )}
                </li>
              ))}
              <li className="menu_item">
                <Link to="/login" className="menu_link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="light_mode">
            <span onClick={toggleTheme}>
              {theme === 'light-theme' ? (
                <span>
                  <i className="ri-moon-line"></i>Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i>Light
                </span>
              )}
            </span>
          </div>
          <span className="mobile_menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
}
