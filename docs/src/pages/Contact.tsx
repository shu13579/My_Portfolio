import React from 'react';
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact: React.FC = () => {
  return (
    <div>
      <h2>Contact</h2>
      <a className="contact-link" href="https://www.instagram.com/_shu.25/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
      <a className="contact-link" href="https://twitter.com/sHu_11_25" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} /> X(Twitter)
      </a>
      <a className="contact-link" href="https://github.com/shu13579" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
      {/* お問い合わせフォーム、地図、FAQなど他の要素を追加 */}
    </div>
  );
};

export default Contact;