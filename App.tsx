import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-accent-500 selection:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
