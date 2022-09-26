/* eslint-disable */

import { useState, useEffect } from "react";
import "./App.css";
import { Pyramid, Trivia, Timer } from "./components";

function App() {
  const [stop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState(0);

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>

      <Pyramid questionNumber={questionNumber} setEarned={setEarned} />
    </div>
  );
}

export default App;
