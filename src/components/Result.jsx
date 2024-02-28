import React from 'react';
import './Result.css';

const Result = ({ score, onRestart }) => {
  const totalQuestions = 15;
  const percentage = Math.ceil((score / totalQuestions) * 100);

  return (
    <div>
      <div className='result-div'>
        <h1>Final Results</h1>
        <h2>{score} out of {totalQuestions} correct - ({percentage}%)</h2>
        <button onClick={onRestart}>Restart game</button>
      </div>
    </div>
  );
};

export default Result;