import React from 'react';
import './Skills.css';
import Marquee from 'react-fast-marquee';
import javascript from './javascript.svg';
import nextJS from './nextJS.svg';
import react from './react.svg';
import typescript from './typescript.svg';
import mongoDB from './mongoDB.svg';
import tailwind from './tailwind.svg';
import nodejs from './nodejs.svg';

const Skills = () => {
  const skillsData = [
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'Tailwind',
    'MongoDB',
    'NodeJS'
  ];

  const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case 'javascript':
        return javascript;
      case 'next js':
        return nextJS;
      case 'react':
        return react;
      case 'typescript':
        return typescript;
      case 'mongodb':
        return mongoDB;
      case 'tailwind':
        return tailwind;
      case 'nodejs':
        return nodejs;
      default:
        return null;
    }
  };

  return (
    <div id="skills" className="skills-container">
      <div className="background-blur"></div>

      <div className="divider">
        <div className="divider-line"></div>
      </div>

      <div className="title-container">
        <div className="title-content">
          <span className="title-line"></span>
          <span className="title">Skills</span>
          <span className="title-line"></span>
        </div>
      </div>

      <div className="marquee-container">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="skill-item"
              key={id}
            >
              <div className="skill-card">
                <div className="card-divider">
                  <div className="divider-line"></div>
                </div>
                <div className="skill-content">
                  <div className="skill-image-wrapper">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="skill-image"
                    />
                  </div>
                  <p className="skill-text">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
