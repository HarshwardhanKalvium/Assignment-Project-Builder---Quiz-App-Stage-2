import React from 'react';
import './Start.css';

export default function Start({ onStartClick }) {
  return (
    <div>
      <div className='start-div'>
        <h1 className='heading'>Quiz app</h1>
        <button onClick={onStartClick}>Start</button>
      </div>
    </div>
  );
}