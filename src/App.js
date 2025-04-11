// App.js
import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PdfComponent from './components/PdfComponent';
import HeroSection from './components/hero';

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <Container fluid className="bg-white p-0">
      <Navigation />
      {!showResume ? (
        <HeroSection onStart={() => setShowResume(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/preview" element={<PdfComponent />} />
        </Routes>
      )}
      <Footer />
    </Container>
  );
}

export default App;
