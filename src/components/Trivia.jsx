import { useEffect, useState } from "react";
import { data } from "../helpers/data";

const Trivia = ({  setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");
    delay(2000, () =>
      setClassName(item.correct ? "answer correct" : "answer wrong")
    );
    delay(4000, () =>
      {
        if(item.correct) {
            setQuestionNumber(prev => prev + 1)
            setSelectedAnswer(null)
        } else {
            setStop(true)
        }
      }
    );
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item, index) => (
          <div
            key={index}
            className={selectedAnswer === item ? className : "answer"}
            onClick={() => handleClick(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
