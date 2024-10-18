// src/Login.js
import React, { useState } from 'react';
import '../Auth.css'; // Import a CSS file for styles

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;

