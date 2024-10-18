import React from 'react';
import '../index.css';



const Result = ({ score }) => {
  return (
    <div>
      <h2>Test Completed</h2>
      <p>Your score: {score}</p>
    </div>
  );
};

export default Result;
