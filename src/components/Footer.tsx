import React from 'react';
import logo from '../assets/my_face.JPG';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Footer: React.FC = () => {
  return (
    <div className="contact-container">
      <p>Email: ---@--.jp</p>
      <p>Phone: --- --- ----</p>

      <a className="contact-link" href="https://www.instagram.com/_shu.25/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram"></i> Instagram
      </a>
      <a className="contact-link" href="https://github.com/shu13579" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i> Github
      </a>
      {/* お問い合わせフォーム、地図、FAQなど他の要素を追加 */}
    </div>
  );
};

export default Footer;