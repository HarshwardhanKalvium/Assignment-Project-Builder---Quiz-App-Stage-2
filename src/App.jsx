import React, { useState } from 'react';
import './App.css';
import Start from './components/Start';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [startClicked, setStartClicked] = useState(true);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(true);

  const handleButtonClick = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? 'rgba(36, 13, 47, 1)' : 'black';
  };

  const handleStartClick = () => {
    setStartClicked(false);
  };

  const handleQuestionsCompleted = () => {
    setAllQuestionsCompleted(true);
  };

  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
  };

  const handleRestart = () => {
    setStartClicked(true);
    setAllQuestionsCompleted(false);
    setScore(0);
  };

  return (
    <>
      <nav>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="main-logo" />
          <h2>Quiz</h2>
        </div>
        <button onClick={handleButtonClick}>{isDarkMode ? 'Dark' : 'Light'}</button>
      </nav>
      {startClicked && <Start onStartClick={handleStartClick} />}
      {!startClicked && !allQuestionsCompleted && (
        <QuestionBox onQuestionsCompleted={handleQuestionsCompleted} onScoreUpdate={handleScoreUpdate} />
      )}
      {allQuestionsCompleted && <Result score={score} onRestart={handleRestart} />}
    </>
  );
}

export default App;