import React from 'react';

const About = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me">
        <h2>
        About Me
        </h2>
        <div className="section-divider"></div>
        <p>
    Hi! I’m a full-time Computer Science student currently working at RBC as an Automation Analyst co-op for 8 months.
    I’m passionate about AI and currently diving deep into cybersecurity through platforms 
    like TryHackMe and working toward certifications.
    Outside of school, I work part-time and build side projects to keep growing. 
    I also make digital art, which keeps my creativity flowing and 
    gives me a fresh lens on tech. 
        </p>
      </div>
      <div className="photo-frame">
        <img src="/images/myImage.png" alt="Syeda Chowdhury" />
      </div>
      <div id="empty"></div>
    </section>
  );
};

export default About;
