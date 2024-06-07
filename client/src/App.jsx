import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Layout/Hero';
import Counter from './Components/Layout/Counter';
import Service from './Components/Layout/Service';
import Contact from './Components/Layout/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Layout/Login';
import Admin from './Components/Layout/Admin';

export default function App() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero theme={theme} />
              <Counter />
              <Service />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
