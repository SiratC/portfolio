import React, { useState } from 'react';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const Header = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    localStorage.setItem('currentSection', targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home',       id: 'home' },
    { label: 'About Me',   id: 'about-me' },
    { label: 'Education',  id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills',     id: 'skills' },
    { label: 'Projects',   id: 'projects' },
  ];

  return (
    <header className="header">
      {/* Logo */}
      <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="header-logo">
        <img src="/logo.png" alt="Syeda Chowdhury Logo" style={{ height: '22px', width: 'auto' }} />
      </a>

      {/* Desktop nav */}
      <nav className="nav-left nav-desktop">
        <ul>
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <h1><a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>{label}</a></h1>
            </li>
          ))}
          <li>
            <h1><a href="/Resume-Portfolio.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h1>
          </li>
        </ul>
      </nav>

      {/* Right side: icons + hamburger */}
      <div className="nav-right">
        <i
          onClick={toggleTheme}
          className={`material-icons toggleButton ${currentTheme}`}
          title="Toggle Theme"
        >
          palette
        </i>
        <a href="https://www.linkedin.com/in/syeda-chowdhury-b999781a7/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedinIcon className="social-icon" width="29" height="29" />
        </a>
        <a href="https://github.com/SiratC" target="_blank" rel="noopener noreferrer" title="GitHub">
          <GithubIcon className="social-icon" width="28" height="28" />
        </a>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav className={`nav-mobile ${menuOpen ? 'nav-mobile--open' : ''}`}>
        <ul>
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>{label}</a>
            </li>
          ))}
          <li>
            <a href="/Resume-Portfolio.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
