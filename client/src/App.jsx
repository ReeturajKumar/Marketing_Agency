import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Layout/Hero';
import Counter from './Components/Layout/Counter';
import Service from './Components/Layout/Service';
import Contact from './Components/Layout/Contact';
import Footer from './Components/Footer/Footer';

export default function App() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}
