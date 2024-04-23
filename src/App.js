
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Confirmation from './components/Confirmation';

const App = () => {
  const [formEntries, setFormEntries] = useState([]);
  // add the form data to previous entries
  const handleFormSubmit = (newformData) => {
    setFormEntries([...formEntries, newformData]);
  };

  return (
    <Router>
       <Route exact path="/"  render={(props) => <SignUpForm {...props} onSubmit={handleFormSubmit} />} /> 
       <Route path="/confirmation" render={(props) => <Confirmation {...props} formEntries={formEntries} />} />
    </Router>
  );
};

export default App;
