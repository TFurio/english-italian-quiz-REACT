import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  const questions = [
    {
      questionText: 'Come si dice "mela" in inglese?',
      answerOptions: [
        { answerText: 'Banana', isCorrect: false },
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Pear', isCorrect: false },
        { answerText: 'Orange', isCorrect: false },
      ],
    },
    {
      questionText: 'Come si dice "libro" in inglese?',
      answerOptions: [
        { answerText: 'Book', isCorrect: true },
        { answerText: 'Desk', isCorrect: false },
        { answerText: 'Chair', isCorrect: false },
        { answerText: 'Page', isCorrect: false },
      ],
    },
    {
      questionText: 'Come si dice "cane" in inglese?',
      answerOptions: [
        { answerText: 'Cat', isCorrect: false },
        { answerText: 'Dog', isCorrect: true },
        { answerText: 'Mouse', isCorrect: false },
        { answerText: 'Horse', isCorrect: false },
      ],
    },
{
  questionText: 'Come si dice "gatto" in inglese?',
  answerOptions: [
    { answerText: 'Cat', isCorrect: true },
    { answerText: 'Bat', isCorrect: false },
    { answerText: 'Rat', isCorrect: false },
    { answerText: 'Mat', isCorrect: false },
  ],
},
{
  questionText: 'Come si dice "sole" in inglese?',
  answerOptions: [
    { answerText: 'Moon', isCorrect: false },
    { answerText: 'Star', isCorrect: false },
    { answerText: 'Sun', isCorrect: true },
    { answerText: 'Sky', isCorrect: false },
  ],
},
{
  questionText: 'Come si dice "casa" in inglese?',
  answerOptions: [
    { answerText: 'Home', isCorrect: true },
    { answerText: 'House', isCorrect: true },
    { answerText: 'Hose', isCorrect: false },
    { answerText: 'Case', isCorrect: false },
  ],
},
{
  questionText: 'Come si dice "amore" in inglese?',
  answerOptions: [
    { answerText: 'Amour', isCorrect: false },
    { answerText: 'Love', isCorrect: true },
    { answerText: 'Like', isCorrect: false },
    { answerText: 'Lover', isCorrect: false },
  ],
},
{
  questionText: 'Come si dice "tavolo" in inglese?',
  answerOptions: [
    { answerText: 'Table', isCorrect: true },
    { answerText: 'Tabloid', isCorrect: false },
    { answerText: 'Tablet', isCorrect: false },
    { answerText: 'Label', isCorrect: false },
  ],
},
{
  questionText: 'Come si dice "scuola" in inglese?',
  answerOptions: [
    { answerText: 'School', isCorrect: true },
    { answerText: 'Scool', isCorrect: false },
    { answerText: 'Shool', isCorrect: false },
    { answerText: 'Skool', isCorrect: false },
  ],
},
{
  questionText: 'Come si dice "città" in inglese?',
  answerOptions: [
    { answerText: 'City', isCorrect: true },
    { answerText: 'Town', isCorrect: false },
    { answerText: 'Country', isCorrect: false },
    { answerText: 'Village', isCorrect: false },
  ],
},

  ];

  const handleAnswerOptionClick = (isCorrect) => {
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

  const styles = {
    app: {
      fontFamily: "'Open Sans', sans-serif",
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#034694',
      padding: '2rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px', // Shortened width for a more phone-like appearance
      width: '80%',
      boxSizing: 'border-box',
      color: '#034694',
      aspectRatio: '16 / 18', // Adjusted for a shorter card
    },
    button: {
      backgroundColor: '#FFD700',
      border: 'none',
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#034694',
    },
    score: {
      color: '#034694',
      fontSize: '1rem',
      margin: '1rem 0',
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.card}>
        {showScore ? (
          <>
            <div className='score-section' style={styles.score}>
              You scored {score} out of {questions.length}
            </div>
            <button onClick={resetQuiz} style={styles.button}>
              Start Over
            </button>
          </>
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
                <button
                  style={styles.button}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            <div style={styles.score}>
              Current Score: {score}/{currentQuestion} {/* Updated this line */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
