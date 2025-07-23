import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faTwitter, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faExternalLinkAlt, 
  faGraduationCap, 
  faBriefcase 
} from '@fortawesome/free-solid-svg-icons';
import portfolioData from '../data/portfolio-data.json';
import './Portfolio.css';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    aboutDescription: string;
    skills: string[];
    profileImage: string;
  };
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  contact: {
    description: string;
    socialLinks: SocialLink[];
  };
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const data = portfolioData as PortfolioData;

  // FontAwesome アイコンマッピング
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'faEnvelope': return faEnvelope;
      case 'faGithub': return faGithub;
      case 'faTwitter': return faTwitter;
      case 'faLinkedin': return faLinkedin;
      default: return faEnvelope;
    }
  };

  // データをJSONから取得
  const projects: Project[] = data.projects;
  const experiences: Experience[] = data.experiences;
  const education: Education[] = data.education;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">Portfolio</div>
          <ul className="nav-menu">
            {['hero', 'about', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section} className="nav-item">
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === 'hero' ? 'Home' : 
                   section === 'about' ? 'About' :
                   section === 'experience' ? 'Experience' :
                   section === 'projects' ? 'Projects' : 'Contact'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              {data.personal.name}
              <span className="hero-subtitle">{data.personal.title}</span>
            </h1>
            <p className="hero-description">
              {data.personal.description}
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                プロジェクトを見る
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                お問い合わせ
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img src={data.personal.profileImage} alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                {data.personal.aboutDescription}
              </p>
              <div className="skills">
                <h3>技術スタック</h3>
                <div className="skill-tags">
                  {data.personal.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-section">
              <h3 className="timeline-header">
                <FontAwesomeIcon icon={faBriefcase} />
                職歴
              </h3>
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <span className="timeline-period">{exp.period}</span>
                    <ul>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="timeline-section">
              <h3 className="timeline-header">
                <FontAwesomeIcon icon={faGraduationCap} />
                学歴
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.school}</h5>
                    <span className="timeline-period">{edu.period}</span>
                    {edu.description && <p>{edu.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p>{data.contact.description}</p>
            <div className="social-links">
              {data.contact.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="social-link"
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                >
                  <FontAwesomeIcon icon={getIcon(link.icon)} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;