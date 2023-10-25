import React from 'react';
import '../styles/SkillSet.css';

const SkillSet: React.FC = () => {
  return (
    <div className="skillset-container">
      <h2 className="skillset-title">My Skill Set</h2>

      <div className="skill-category">
        <h3 className="skill-category-title">Technical Skills</h3>

        <div className="skill-item">
          Python:
          <div className="stars">
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>

        <div className="skill-item">
          JavaScript:
          <div className="stars">
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>

        <div className="skill-item">
          SQL: 
          <div className="stars">
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h3 className="skill-category-title">Soft Skills</h3>

        <div className="skill-item">
          Communication:
          <div className="stars">
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;