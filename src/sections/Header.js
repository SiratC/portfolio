import React from 'react';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const Header = ({ toggleTheme, currentTheme }) => {
  // When a navigation link is clicked, the target selection is saved in localStorage 
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    localStorage.setItem('currentSection', targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav-left">
        <ul>
        <li>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              <img 
                src="/logo.png" 
                alt="Syeda Chowdhury Logo"  style={{ height: '20px', width: 'auto' }}
                className="logo" 
              />
            </a>
          </li>
          <li>
            <h1><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></h1>
          </li>
          <li>
          <h1> <a href="#about" onClick={(e) => handleNavClick(e, 'about-me')}>About Me</a></h1>
          </li>
          <li>
          <h1> <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></h1>
          </li>
          <li>
          <h1><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></h1>
          </li>
          <li>
          <h1> <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume">Resume</a></h1>
          </li>
        </ul>
      </nav>
      <div className="nav-right">
        {/* Palette icon for theme toggling */}
        <i
          onClick={toggleTheme}
          className={`material-icons toggleButton ${currentTheme}`}
          title="Toggle Theme"
        >
          palette
        </i>
        {/* LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/sirat-chowdhury-b999781a7/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon className="social-icon" width="29" height="29" />
        </a>
        {/* GitHub icon */}
        <a
          href="https://github.com/SiratC"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GithubIcon className="social-icon" width="28" height="28"/>
        </a>
      </div>
    </header>
  );
};

export default Header;