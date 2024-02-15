// src/components/Authenticate.jsx
import React from 'react';

const [error, setError] = useState(null);
{error && <p>{error}</p>}
const [successMessage, setSuccessMessage] = useState(null);
{successMessage && <p>{successMessage}</p>}

const handleClick = async () => {
  try {
    const response = await fetch(' https://fsa-jwt-practice.herokuapp.com/authenticate', {
     method: 'GET',
     headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${Token}'
     } 
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    setError(error.message);
    setSuccessMessage(result.message);
  } 
};

const Authenticate = ({ token }) => {
  return (
    <div>
      <h2>Authenticate</h2>
    </div>
  );
  }
  <button onClick={handleClick}>Authenticate Token</button>

export default Authenticate;