//import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SkillSet from './pages/SkillSet';
import Contact from './pages/Contact';
import Test from './pages/Test';
import UpdateHistory from './components/UpdateHistory';

const NotFound = () => <div>404 Not Found</div>;
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skillset" element={<SkillSet />} />
        <Route path="/test" element={<Test />} />
        <Route path="/update-history" element={<UpdateHistory />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


//<Route component={NotFound} />