import React from 'react';

const Question = ({ question, onSelect }) => {
  return (
    <div className="question">
      <h3>{question.text}</h3>
      <div className="answer-options">
        {question.options.map((option, index) => (
          <div key={index} className="answer-option">
            <label>
              <input
                type="radio"
                name={`question_${question.id}`}
                value={option.value}
                onChange={() => onSelect(option.value)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
