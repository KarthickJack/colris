import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Services from './pages/services';
import BookSlots from './pages/bookSlots';
import ReachUs from './pages/reachUs';
import Help from './pages/help';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/services' element={<Services />} />
          <Route path='/book_slots' element={<BookSlots />} />
          <Route path='/reach_us' element={<ReachUs />} />
          <Route path='/help' element={<Help />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
