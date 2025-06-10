import React from 'react';

const About = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me">
        <h2>
        About Me
        </h2>
        <p>
    Hi! I’m a full-time Computer Science student looking for a Fall 2025 co-op in Software Development, 
    Cybersecurity, Data Science, Cloud Engineering, DevOps, or UI/UX Design. 
    I’m passionate about AI and currently diving deep into cybersecurity through platforms 
    like TryHackMe and working toward certifications.
    Outside of school, I work part-time and build side projects to keep growing. 
    I also make digital art, which keeps my creativity flowing and 
    gives me a fresh lens on tech. 
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
