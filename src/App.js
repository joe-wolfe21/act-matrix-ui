import { useState } from 'react'

import questionOne from './images/act-matrix-q1.png';
import questionTwo from './images/act-matrix-q2.png';
import questionThree from './images/act-matrix-q3.png';
import questionFour from './images/act-matrix-q4.png';
import questionFive from './images/act-matrix-q5.png';
import './App.css';

const questionImgs = [questionOne, questionTwo, questionThree, questionFour, questionFive]

const Header = () => <h2 className="header">Let's Matrix</h2>

const ActQuestion = ({questionImg}) => {
  return (
    <img src={questionImg} className="act-question" alt="act matrix question" />
  )
}

const ActSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(['', '', '', '', ''])

  const handleUpdateAnswer = (event) => {
    const updatedAnswers = [...answers]
    updatedAnswers[currentQuestion] = event.target.value

    setAnswers(updatedAnswers)
  }

  const handlePreviousClick = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleSubmitClick = (event) => {
    console.log("Submitted matrix with the following answers:", answers)
  }

  const questionImg = questionImgs[currentQuestion]
  const answer = answers[currentQuestion]

  return (
    <div className="act-section">
      <ActQuestion questionImg={questionImg} />
      <textarea className="act-answer" placeholder="starting writing..." value={answer} onChange={handleUpdateAnswer} />
      <div className="btn-group">
        {currentQuestion > 0 && <button className="act-btn" onClick={handlePreviousClick}>Previous</button>}
        {currentQuestion === (questionImgs.length - 1) ? <button className="act-btn" onClick={handleSubmitClick}>Submit</button> : <button className="act-btn" onClick={handleNextClick}>Next</button>}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Header />
        <ActSection />
    </div>
  );
}

export default App;
