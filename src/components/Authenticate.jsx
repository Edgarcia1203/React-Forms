import React, { useState } from 'react';

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setSuccessMessage(result.message);
        setUserData(result.data); // Set user data if authentication is successful
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      {userData && <p>Welcome, {userData.username}</p>} {/* Display username if available */}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}

export default Authenticate;