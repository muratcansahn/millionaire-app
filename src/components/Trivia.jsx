import { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Trivia = (props) => {
  const { data, setStop, setQuestionNumber, questionNumber } = props;
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  console.log(selectedAnswer);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(answer.isCorrect ? "answer correct" : "answer wrong");
      delay(2000, () => {
        answer.isCorrect ? correctAnswer() : wrongAnswer();
      });
      delay(6000, () => {
        if (answer.isCorrect) {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        } else {
          setStop(true);
        }
      });
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
