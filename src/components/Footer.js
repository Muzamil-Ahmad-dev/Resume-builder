// components/Footer.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Container
      fluid
      className="text-center text-white py-4"
      style={{
        background: "linear-gradient(90deg, #007074, #034C53)", // Same gradient as navbar
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for modern effect
      }}
    >
      <Row>
        <Col>
          <p className="m-0" style={{ fontSize: "1.2rem", fontWeight: "700" }}>Resume Builder</p>
          <p className="m-0">Craft your professional resume with ease!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="social-icons mt-3">
            <a href="https://github.com/Muzamil-Ahmad-dev" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaTwitter size={24} />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mt-3 mb-0">© {new Date().getFullYear()} Resume Builder. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
