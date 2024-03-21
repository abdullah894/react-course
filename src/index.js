import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/css/style.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={< ContactPage />} />
      </Routes>
    </Router>

    <footer className="footer">
      <div className="social-media-links">
        <i className="fab fa-facebook fa-4x"></i>
        <i className="fab fa-twitter fa-4x"></i>
        <i className="fab fa-instagram fa-4x"></i>
      </div>
      <p>World Travel &copy; 2020, All Rights Reserved</p>
    </footer>
  </React.StrictMode>
);
