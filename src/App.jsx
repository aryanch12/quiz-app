// src/App.js
import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Test from './components/Test';
import './App.css'; // Make sure to include your styles

const App = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login 

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Quiz Application</h1>
      {user ? (
        <div className="welcome-container">
          <h2 className="welcome-message">Welcome, {user}!</h2>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <Test onComplete={(trait) => alert(`Your Personality Trait is: ${trait}`)} />
        </div>
      ) : (
        <div className="form-container">
          <div className="toggle-buttons">
            <button onClick={toggleForm} className={isLogin ? 'active' : ''}>
              Login
            </button>
            <button onClick={toggleForm} className={!isLogin ? 'active' : ''}>
              Signup
            </button>
          </div>
          {isLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Signup onLogin={handleLogin} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
