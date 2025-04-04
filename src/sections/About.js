import React from 'react';

const About = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me">
        <h2>
        About Me
        </h2>
        <p>
        I'm a full-time Computer Science student seeking a Fall 2025 co-op in Software Development, 
        Cybersecurity, Data Science, Cloud Engineering, DevOps, or UI/UX Design. I'm passionate about 
        innovative technologies—especially AI—and I balance my academics with part-time work and extracurricular 
        projects that allow me to constantly learn and create. Beyond my technical pursuits, I also enjoy making digital art, 
        which fuels my creativity. These pursuits not only add depth to 
        my life but also drive innovative and creative thinking in my personal projects.
        </p>
      </div>
      <div className="photo-frame">
        <img src="/images/myImage.png" alt="Photo" />
      </div>
      <div id="empty"></div>
    </section>
  );
};

export default About;
