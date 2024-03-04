import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Analytics } from './pages/Analytics';
import { Validators } from './pages/Validators';
import { Faucet } from './pages/Faucet';
import { Leaderboard } from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div className="noise"></div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/analytics" Component={Analytics} />
        <Route path="/validators" Component={Validators} />
        <Route path="/faucet" Component={Faucet} />
        <Route path="/leaderboard" Component={Leaderboard} />
      </Routes>
    </Router>
  );
}

export default App;
