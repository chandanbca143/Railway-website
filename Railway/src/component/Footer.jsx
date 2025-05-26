import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p>&copy; 2025 Railway Services. All rights reserved.</p>
        <div style={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#3F81D8',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialMedia: {
    marginTop: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '16px',
  },
  linkHover: {
    textDecoration: 'underline',
  }
};

export default Footer;
