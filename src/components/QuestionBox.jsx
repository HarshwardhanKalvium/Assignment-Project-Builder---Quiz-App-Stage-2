import React, { useState, useEffect } from 'react';
import './QuestionBox.css';
import questions from '../questions.json';

const QuestionBox = ({ onQuestionsCompleted, onScoreUpdate }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const getCurrentQuestion = () => questions[currentQuestionIndex];

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderOptions = () => {
    const currentQuestion = getCurrentQuestion();
    return currentQuestion.options.map((option) => (
      <div
        key={option.id}
        className="options"
        onClick={() => handleOptionClick(option.isCorrect)}
      >
        {option.text}
      </div>
    ));
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      onQuestionsCompleted();
      onScoreUpdate(score);
    }
  }, [currentQuestionIndex, onQuestionsCompleted, onScoreUpdate, score]);

  const previousButton = () =>{
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }
  const nextButton = () =>{
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }
  const quitButton = () =>{
    const userConfirmed = window.confirm('Are you sure you want to quit?');
    if (userConfirmed) {
      onQuestionsCompleted();
      onScoreUpdate(score);
    }
  }



  return (
    <div>
      <div className='content'>
        <h2>Question: {currentQuestionIndex + 1} out of {questions.length}</h2>
        {currentQuestionIndex < questions.length && (
          <>
            <h1>{getCurrentQuestion().text}</h1>
            {renderOptions()}
          </>
        )}
        <div className='buttons'>
          <button onClick={previousButton}>Previous</button>
          <button onClick={nextButton}>Next</button>
          <button onClick={quitButton}>Quit</button>
        </div>
        {/* <p>Score: {score}</p> */}
      </div>
    </div>
  );
};

export default QuestionBox;