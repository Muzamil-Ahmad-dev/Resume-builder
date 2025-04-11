// components/Navigation.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function Navigation() {
  const linkStyle = {
    color: "white",
    margin: "0 20px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",  // Smooth transition for hover
  };

  const activeStyle = {
    borderBottom: "3px solid white",
    transform: "scale(1.1)",  // Slightly enlarging the active link
    transition: "all 0.3s ease",
  };

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #007074, #034C53)", // Adding a smooth gradient
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",  // Adding a subtle shadow for a modern feel
      }}
      sticky="top"
      variant="dark"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand className="fw-bold text-white">
          <NavLink to="/" style={{ ...linkStyle, fontSize: "1.6rem", fontWeight: "700" }}>
            Resume Builder
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
            >
              <AiFillHome size={20} /> Home
            </NavLink>
            <NavLink
              to="#"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
            >
              <FaRocket size={18} /> Features
            </NavLink>
            <NavLink
              to="#"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
            >
              <FiPhoneCall size={18} /> Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
