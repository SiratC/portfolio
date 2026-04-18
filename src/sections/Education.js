import React from 'react';

const education = {
  school: 'Lassonde School of Engineering - York University',
  degree: 'Bachelor of Science (BSc) Honours, Computer Science',
  activities: [
    'WiCSE (Women in Computer Science and Engineering) | EDI Faculty Committee – Student Representative',
    'Cybersecurity Club – Member',
    'EllHacks 2024 – Volunteer',
  ],
};

const Education = () => (
  <section className="education-section" id="education">
    <h2>Education</h2>
    <div className="section-divider" style={{margin: '0 auto 24px auto'}}></div>
    <div className="edu-card">
      <div className="edu-header">
        <span className="edu-school">{education.school}</span>
        <span className="edu-degree">{education.degree}</span>
      </div>
      <div className="edu-activities">
        <span className="edu-activities-title">Activities & Societies:</span>
        <ul>
          {education.activities.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
