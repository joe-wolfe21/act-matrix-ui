import emptyMatrix from "../images/act-matrix-blank.png";

const ResultsView = ({ answers }) => (
  <div className="result">
    <img className="act-matrix" src={emptyMatrix} alt="completed act matrix" />
    <div className="bottom-right">{answers[0]}</div>
    <div className="bottom-left">{answers[1]}</div>
    <div className="top-left">{answers[2]}</div>
    <div className="top-right">{answers[3]}</div>
    <div className="centered">{answers[4]}</div>
  </div>
);

export default ResultsView;