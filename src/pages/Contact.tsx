import React from 'react';
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.min.css';

const Contact: React.FC = () => {
  return (
    <div>
      <p>Email: ---@--.jp</p>
      <p>Phone: --- --- ----</p>

      <a className="contact-link" href="https://www.instagram.com/_shu.25/" target="_blank" >
        <i className="fa fa-instagram"></i> Instagram
      </a>
      <a>
        <i className="fa fa-twitter"></i> Twitter
      </a>
      <a className="contact-link" href="https://github.com/shu13579" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i> Github
      </a>
      {/* お問い合わせフォーム、地図、FAQなど他の要素を追加 */}
    </div>
  );
};

export default Contact;