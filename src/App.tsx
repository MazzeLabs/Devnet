import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Analytics } from './pages/Analytics';
import { Validators } from './pages/Validators';
import { Faucet } from './pages/Faucet';
import { Leaderboard } from './pages/Leaderboard';
import { DetailBlock } from './subpages/BlockDetail';

function App() {
  return (
    <Router>
      <div className="noise"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/validators" element={<Validators />} />
        <Route path="/faucet" element={<Faucet />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/block/:blockNumber/*" element={<DetailBlock />} />
      </Routes>
    </Router>
  );
}

export default App;
