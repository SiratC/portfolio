import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as PreviewIcon } from '../assets/preview.svg';

const projectData = [
  {
    title: 'DropChat',
    date: '2024-06-30 - Present',
    description:
      'DropChat offers a seamless, real-time multi-user chat experience where users can connect and communicate with unique usernames, enhancing social interaction.',
    techStack: ['Node.js', 'JavaScript', 'CSS', 'HTML', 'UI/UX'],
    githubLink: 'https://github.com/SiratC/DropChat',
    liveLink: 'https://drop-chat-fttxtqswx-sirat-chowdhurys-projects.vercel.app',
    imageUrl: '/images/img2.png'
  },
  {
    title: 'Syeda Chowdhury',
    date: '2025-03-29 - Present',
    description:
      'My website that you are currently on.',
    techStack: ['React.js', 'JavaScript', 'CSS', 'HTML', 'UI/UX'],
    githubLink: 'https://github.com/SiratC/portfolio',
    liveLink: 'https://portfolio-git-main-sirat-chowdhurys-projects.vercel.app',
    imageUrl: '/images/img4.png'
  },
  {
    title: 'Multi-Threaded Alarms System',
    date: '2024-10-16 - 2024-12-19',
    description:
      'This system enables users to efficiently manage multiple alarms at once, ensuring timely notifications and a more organized daily schedule.',
    techStack: ['C', 'POSIX Threads'],
    githubLink: 'https://github.com/SiratC/Multithreaded-Alarms-System',
    imageUrl: '/images/img3.png'
  },
  {
    title: 'Dark Mode Extension',
    date: '2024-12-18 - 2024-12-19',
    description:
      'This extension provides a simple way for users to toggle between dark and light modes, enhancing readability and reducing eye strain during prolonged browsing sessions.',
    techStack: ['JavaScript', 'Chrome Extension API'],
    githubLink: 'https://github.com/SiratC/Dark-Mode-Extension',
    liveLink: 'https://chromewebstore.google.com/detail/dark-mode-toggle/eohginahofdggkkpjimolnppgjchaifn',
    imageUrl: '/images/img1.png'
  }
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            {project.imageUrl && (
              <div className="project-card-image">
                <img src={project.imageUrl} alt={`${project.title} screenshot`} />
              </div>
            )}
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <div id="date">{project.date}</div>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-card-footer">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  title="GitHub"
                >
                  <GithubIcon className="footer-icon" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  title="Live Demo"
                >
                  <PreviewIcon className="footer-icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

