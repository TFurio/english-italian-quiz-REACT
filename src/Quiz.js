import React, { useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import characterHappy from './path-to-happy-character-image.png'; // Replace with actual path
import characterSad from './path-to-sad-character-image.png'; // Replace with actual path
// Import other characters similarly


const questions = [
  {
    questionText: 'What is the Italian word for "Apple"?',
    answerOptions: [
      { answerText: 'Mela', isCorrect: true },
      { answerText: 'Banana', isCorrect: false },
      { answerText: 'Pera', isCorrect: false },
      { answerText: 'Arancia', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the English word for "Libro"?',
    answerOptions: [
      { answerText: 'Book', isCorrect: true },
      { answerText: 'Pen', isCorrect: false },
      { answerText: 'Desk', isCorrect: false },
      { answerText: 'Chair', isCorrect: false },
    ],
  },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
