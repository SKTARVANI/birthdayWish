import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BirthdayWish from './birthdayWish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayWish />} />  {/* Make sure Main component is used here */}
      </Routes>
    </Router>
  );
}

export default App;
