import React, { useState } from 'react';

const experiences = [
  {
    role: 'Automation Analyst',
    company: 'RBC',
    type: 'Co-op',
    period: 'Jan 2026 – Present · 4 mos',
    location: 'Toronto, Ontario, Canada · On-site',
    current: true,
    bullets: [],
    color: '#669593',
  },
  {
    role: 'AI Data Analyst',
    company: 'LiiT Care Connect Inc.',
    type: 'Internship',
    period: 'Nov 2025 – Jan 2026 · 3 mos',
    location: 'Remote',
    current: false,
    bullets: [
      'Analyzed business needs and user experience to identify areas for improvement using AI.',
      'Conducted research to validate user challenges and inform solution design.',
      'Developed strategic recommendations to improve trust, personalization, and operations.',
      'Created a professional slide deck and final report to support decision-making and communicate insights to stakeholders.',
    ],
    color: '#669593',
  },
  {
    role: 'Cybersecurity Analyst',
    company: 'PatchIT',
    type: 'Internship',
    period: 'Jun 2025 – Jul 2025 · 2 mos',
    location: 'Remote',
    current: false,
    bullets: [
      'Researched and analyzed CVEs from the National Vulnerability Database (NVD), focusing on severity, impact, and exploitability.',
      'Mapped each CVE to relevant job roles, required proficiency levels, and associated technologies to support role-based vulnerability insights.',
      'Developed Python script to automate the retrieval of EPSS scores and exploit status.',
      'Designed an interactive Streamlit dashboard enabling stakeholders to filter and visualize CVEs by severity and exploitability.',
    ],
    color: '#669593',
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="work-section" id="experience">
      <h2>Work Experience</h2>
      <div className="section-divider" style={{margin: '0 auto 12px auto'}}></div>
      <p className="work-subtitle">Places I've contributed professionally</p>

      <div className="work-timeline">
        {experiences.map((exp, index) => (
          <div
            className={`work-card ${expanded === index ? 'work-card--open' : ''}`}
            key={index}
            onClick={() => setExpanded(expanded === index ? null : index)}
            style={{ '--accent': exp.color }}
          >
            {/* Left accent bar */}
            <div className="work-card__bar" />

            <div className="work-card__body">
              <div className="work-card__header">
                <div className="work-card__title-block">
                  <span className="work-card__role">{exp.role}</span>
                  {exp.current && <span className="work-badge">Current</span>}
                </div>
                <div className="work-card__meta">
                  <span className="work-card__company">
                    {exp.company}
                    <span className="work-card__type"> · {exp.type}</span>
                  </span>
                  <span className="work-card__period">{exp.period}</span>
                  <span className="work-card__location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {exp.location}
                  </span>
                </div>
                <div className="work-card__chevron">
                  {exp.bullets.length > 0 && (
                    <svg
                      className={`chevron-icon ${expanded === index ? 'chevron-icon--up' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </div>
              </div>

              {exp.bullets.length > 0 && (
                <div className={`work-card__bullets ${expanded === index ? 'work-card__bullets--visible' : ''}`}>
                  <ul>
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
