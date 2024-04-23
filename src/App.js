
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Confirmation from './components/Confirmation';

const App = () => {
  const [formEntries, setFormEntries] = useState([]);

  const handleFormSubmit = (newformData) => {
    setFormEntries([...formEntries, newformData]);
  };

  return (
    <Router>
      <div>
       <Route exact path="/"  render={(props) => <SignUpForm {...props} onSubmit={handleFormSubmit} />} /> 
       <Route path="/confirmation" render={(props) => <Confirmation {...props} formEntries={formEntries} />} />
      </div>
    </Router>
  );
};

export default App;
