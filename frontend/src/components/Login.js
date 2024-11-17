// src/components/Login.js

import React, { useState } from 'react';
import { loginUser } from '../api/auth'; // Import the login API function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error

    try {
      const data = await loginUser(email, password);
      console.log("Login response:", data); // Add a console log to check the login data
      alert(data.message); // Or redirect to the dashboard
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Login;
