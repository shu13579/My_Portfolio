import React from 'react';
import logo from '../assets/my_face.JPG';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ marginRight: '20px' }}>
        <img src={logo} alt="Logo" height="100" style={{ marginLeft: '10px', marginTop: '10px' }} />
      </div>
      <nav>
        <ul style={{ display: 'flex', gap: '15px' }}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/skillset" className="nav-link">SkillSet</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
