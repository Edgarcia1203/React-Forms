
// src/App.jsx
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

function App() {
  return (
    <div>
      <SignUpForm />
      <Authenticate />
    </div>
  );
}

export default App;
