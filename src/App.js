import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './sections/Header';
import StarTheme from './sections/StarTheme';
import Home from './sections/Home';
import About from './sections/About';
import Tech from './sections/Tech';
import Project from './sections/Project';
import Footer from './sections/Footer';
import LastUpdated from './sections/LastUpdated';


const themes = ['star', 'dark', 'light'];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  // localStorage update for body class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  // On page load, scroll to the saved section if available
  useEffect(() => {
    const currentSection = localStorage.getItem('currentSection');
    if (currentSection) {
      const element = document.getElementById(currentSection);
      if (element) {
        // Timeout to ensure elements are rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);


  const toggleTheme = () => {
    setTheme(prev => {
      const currentIndex = themes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <section id="home"><Home /></section>
       <section id="about-me"><About /></section>
      <section id="skills"><Tech /></section>
      <section id="projects"><Project /></section>
      <section id="footer"><Footer /></section>
      <section id="update"><LastUpdated /></section>
      {theme === 'star' && <StarTheme />}
   
    </div>
  );
}

export default App;

