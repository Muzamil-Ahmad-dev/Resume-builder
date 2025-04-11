// components/HeroSection.js
import React from "react";
import Button from "react-bootstrap/Button";
import { BrowserRouter } from 'react-router-dom';
function HeroSection({ onStart }) {
  return (
    <section className="text-center py-5 bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Build Your Resume in Minutes</h1>
        <p className="lead mb-4">
          A modern, clean, and powerful resume builder. Free to use, easy to export.
        </p>
        <img
          src="https://img.freepik.com/free-vector/minimalist-cv-template-with-photo-space_23-2148936411.jpg?t=st=1744365860~exp=1744369460~hmac=92b61e7de17d3a7d5ddf255effbc80fc2aa2e79f8bf305889b82c3b50c2f9d03&w=996"
          alt="Resume Illustration"
          className="img-fluid rounded mb-4"
          style={{ maxHeight: '400px' }}
        />
        <br />
        <Button variant="primary" size="lg" onClick={onStart}>
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
