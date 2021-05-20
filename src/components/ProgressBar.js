import React from "react";

const ProgressBar = (props) => {
  const { questions, index } = props;
  return questions ? (
    <div className="progressbar">
      <span className="progressbar__title">Quiz</span>
      <div className="progressbar__items">
        {questions.length &&
          questions.map((q, i) => <span className={`progressbar__item ${i <= index && `progressbar__item--active-${ i % 4}`}`}>&nbsp;</span>)}
      </div>
    </div>
  ) : null;
};

export default ProgressBar;
