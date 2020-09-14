import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <Container>
        <h2>What’s Zyllabi?</h2>
        <p>
          Zyllabi hopes to demystify course loads by making course syllabi openly accessible and freely available. 
          It aims to reduce choice paralysis when signing up for classes and act as a reference for the inevitable 
          time a professor tells you to “check the syllabus.”
        </p>
        <p>
          Contact us @ <strong><a href="mailto:zyllabi@gmail.com">zyllabi@gmail.com</a></strong>
        </p>
      </Container>
    </div>
  );
};

export default About;
