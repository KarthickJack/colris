import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
// import Services from './pages/services';
import BookSlots from './pages/bookSlots';
import ReachUs from './pages/reachUs';
// import Help from './pages/help';
import Retail from './pages/retail';

function App() {
  return (
      <div className="container">
        <Navbar />
        <Home />
        {/* <Services /> */}
        <BookSlots />
        <Retail />
        <div className="line"></div>
        <ReachUs />
        </div>
  );
}

export default App;
