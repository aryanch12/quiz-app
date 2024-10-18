// src/components/Test.jsx
import React, { useState, useEffect } from 'react';
import Question from './Question';
import questionsData from '../data/questions.json';
import '../index.css';

const Test = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelections, setUserSelections] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleAnswerSelect = (answer) => {
    const updatedSelections = [...userSelections];
    updatedSelections[currentQuestionIndex] = answer;
    setUserSelections(updatedSelections);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    const trait = calculatePersonalityTrait(userSelections);
    setShowResult(true);
    onComplete(trait);
  };

  const calculatePersonalityTrait = (selections) => {
    const accurateCount = selections.filter((answer) => answer === 'ACCURATE').length;
    if (accurateCount >= 1) return 'Trait A';
    else if (accurateCount >= 0) return 'Trait B';
    else return 'Trait C';
  };

  return (
    <div className="test-container">
      <blockquote className="quote">
        "The only way to do great work is to love what you do." – Steve Jobs
      </blockquote>
      <h2 className="test-title">Personality Test</h2>
      {showResult ? (
        <div className="summary">
          <h2>Your Personality Trait:</h2>
          <p>{calculatePersonalityTrait(userSelections)}</p>
        </div>
      ) : (
        <div className="question">
          {currentQuestionIndex < questions.length && (
            <Question
              question={questions[currentQuestionIndex]}
              onSelect={handleAnswerSelect}
            />
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Test;
