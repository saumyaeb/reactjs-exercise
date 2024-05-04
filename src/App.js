
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Confirmation from './components/Confirmation';

const App = () => {

  const [formEntries, setFormEntries] = useState([]);
  // add the form data to previous entries
  const addFormEntries = (newformData) => {
    setFormEntries([...formEntries, newformData]);
  };

  return (
    <Router>
      <Routes>
      <Route exact path="/"
        element={<SignUpForm onSubmit={addFormEntries} />} />
      <Route exact path="/confirmation"
        element={<Confirmation formEntries={formEntries} />} />
      </Routes>
    </Router>
  );
};
export default App;
