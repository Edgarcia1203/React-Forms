// src/components/SignUpForm.jsx
import React, { useState } from 'react';

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    setToken(data.token);
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
    const data = await response.json();
    console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
   <div>
     <h2>Sign Up</h2>
     {error && <p className="error">{error}</p>}
     <form onSubmit={handleSubmit}>
       <div>
         <label>
           Username:
           <input
             type="text"
             value={useranme}
             onChange={(e) => setUsername(e.target.value)}
           />
         </label>
        </div>
        <div>
          <label>
            Password:
            <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default SignUpForm;