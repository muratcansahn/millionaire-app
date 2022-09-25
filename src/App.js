import { useState } from "react";
import "./App.css";
import { Pyramid, Trivia, Timer } from "./components";
function App() {
  const [stop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState(0);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specialized in what type of product",
      answers: [
        { id: 1, text: "Watches", isCorrect: true },
        { id: 2, text: "Cars", isCorrect: false },
        { id: 3, text: "Shoes", isCorrect: false },
        { id: 4, text: "Bags", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What is the capital of France",
      answers: [
        { id: 1, text: "Paris", isCorrect: true },
        { id: 2, text: "London", isCorrect: false },
        { id: 3, text: "Berlin", isCorrect: false },
        { id: 4, text: "Rome", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "When did the website Facebook launch",
      answers: [
        { text: "2004", isCorrect: false },
        { text: "2005", isCorrect: false },
        { text: "2006", isCorrect: true },
        { text: "2007", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Who played Neo in the Matrix",
      answers: [
        { text: "Keanu Reeves", isCorrect: true },
        { text: "Tom Cruise", isCorrect: false },
        { text: "Will Smith", isCorrect: false },
        { text: "Brad Pitt", isCorrect: false },
      ],
    },
  ];

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
                data={data}
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
