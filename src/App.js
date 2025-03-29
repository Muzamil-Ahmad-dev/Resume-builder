import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PdfComponent from './components/PdfComponent';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect "/Resume-builder" to "/" for local development
    if (window.location.pathname === "/Resume-builder") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container fluid className="bg-white p-0">
      <Navigation />

      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/preview" element={<PdfComponent />} />
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;
