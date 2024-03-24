import React from 'react';


function Footer() {
  return (
    <footer className="footer" style={footerStyle}>
      <p style={copyRightStyle}>&copy; {new Date().getFullYear()} Nam Nguyen. All rights reserved.</p>
      <div className="social-icons" style={socialIconsStyle}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <i className="fa fa-twitter" style={iconStyle}></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <i className="fa fa-github" style={iconStyle}></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <i className="fa fa-linkedin" style={iconStyle}></i>
        </a>
      </div>
    </footer>
  );
}

// Example inline styles
const footerStyle = {
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color)',
  textAlign: 'center',
  padding: '20px 0',
  borderWidth: '1px',
  borderColor: 'var(--bg-color)',
};

const copyRightStyle = {
  margin: 0,
  padding: '5px',
};

const socialIconsStyle = {
  marginTop: '10px',
};

const iconLinkStyle = {
  color: 'var(--secondary-color)',
  textDecoration: 'none',
  margin: '0 10px',
};

const iconStyle = {
  fontSize: '24px',
};

export default Footer;
