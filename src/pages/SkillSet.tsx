import React, { useState } from 'react';
import '../styles/SkillSet.css';

type Skill = {
  name: string;
  stars: number;
};

const SkillSet: React.FC = () => {
  const initialSkills: Skill[] = [
    { name: 'Python', stars: 3 },
    { name: 'TypeScript', stars: 2 },
    { name: 'Ruby', stars: 2 },
    { name: 'Java', stars: 1 },
    { name: 'C++', stars: 1 },
  ];

  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  // 名前順にソート
  const sortByName = () => {
    const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));
    setSkills(sortedSkills);
  };

  // 星の数順にソート（降順）
  const sortByStars = () => {
    const sortedSkills = [...skills].sort((a, b) => b.stars - a.stars);
    setSkills(sortedSkills);
  };

  return (
    <div className="skillset-container">
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByStars}>Sort by Stars</button>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-stars">{Array(skill.stars).fill('⭐').join('')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;