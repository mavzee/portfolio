import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import Laman from './laman'; // No .jsx extension

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HeroBanner />} />
        <Route path="/laman" element={<Laman />} />
      </Routes>
    </Router>
  );
}

export default App;