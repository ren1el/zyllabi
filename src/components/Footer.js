import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-center">
        <Link to="/about" className="m-3">About</Link>
        <a href="https://github.com/ren1el/zyllabi" className="m-3">GitHub</a>
      </Container>
    </div>
  );
};

export default Footer;