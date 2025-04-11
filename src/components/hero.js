// components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom"; // 👈 Make sure to import Link
import Button from "react-bootstrap/Button";

function HeroSection() {
  return (
    <section className="text-center py-5 bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Build Your Resume in Minutes</h1>
        <p className="lead mb-4">
          A modern, clean, and powerful resume builder. Free to use, easy to export.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/10/03/47/online-2617349_1280.jpg"
          alt="Resume Illustration"
          className="img-fluid rounded mb-4"
          style={{ maxHeight: '400px' }}
        />
        <br />
        <Link to="/profile">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
