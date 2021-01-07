import { useState } from 'react'
import questionOne from './images/act-matrix.png';
import './App.css';

const Header = () => <h2 className="header">Let's Matrix</h2>

const ActSection = () => {
  const [comment, setComment] = useState('')

  const handleUpdateComment = (event) => {
    setComment(event.target.value)
  }

  return (
    <div className="act-section">
      <img src={questionOne} className="act-question" alt="act matrix question" />
      <textarea className="act-answer" placeholder="starting writing..." value={comment} onChange={handleUpdateComment} />
      <div className="btn-group">
        <button className="act-btn">Previous</button>
        <button className="act-btn">Next</button>
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
