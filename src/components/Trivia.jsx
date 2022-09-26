import { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import axios from "axios";
import useFetch from "../useFetch";

const Trivia = (props) => {
  const { setStop, setQuestionNumber, questionNumber } = props;
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const { data, loading, error } = useFetch("easy", 5);
  const { data: mediumData } = useFetch("medium", 5);
  const { data: hardData } = useFetch("hard", 5);
  const allquestions = [...data, ...mediumData, ...hardData];

  console.log("mediumData", mediumData);
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  ///fetch questions

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

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
  console.log("data", allquestions);
  // console.log(data[questionNumber - 1].question);
  const shuffledAnsvers = data[0]?.incorrect_answers
    .concat(data[0]?.correct_answer)
    .sort(() => Math.random() - 0.5);
  // console.log("shuffledAnsvers", shuffledAnsvers);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(loading);
  return (
    <div className="trivia">
      {/* <div className="question">{data[questionNumber - 1].question}</div> */}
      {/* <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>  */}
    </div>
  );
};

export default Trivia;
