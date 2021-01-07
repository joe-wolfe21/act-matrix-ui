import { useState } from "react";

import ActQuestion from "./ActQuestion";
import ResultsView from "./ResultsView";
import questions from "../questions";

const ActView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUpdateAnswer = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = event.target.value;

    setAnswers(updatedAnswers);
  };

  const handlePreviousClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmitClick = (event) => {
    setIsSubmitted(true);
  };

  const questionImg = questions[currentQuestion];
  const answer = answers[currentQuestion];

  if (isSubmitted) {
    return <ResultsView answers={answers} />;
  }

  return (
    <div className="act-view">
      <ActQuestion questionImg={questionImg} />
      <textarea
        className="act-answer"
        placeholder="starting writing..."
        value={answer}
        onChange={handleUpdateAnswer}
      />
      <div className="btn-group">
        {currentQuestion > 0 && (
          <button className="btn-previous" onClick={handlePreviousClick}>
            Previous
          </button>
        )}
        {currentQuestion === questions.length - 1 ? (
          <button className="btn-progress" onClick={handleSubmitClick}>
            Submit
          </button>
        ) : (
          <button className="btn-progress" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ActView;
