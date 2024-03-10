import { useEffect, useState } from "react";
import { data } from "../helpers/data";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

const Trivia = ({ setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay()
  }, [letsPlay])
  
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(item.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      if (item.correct) {
        correctAnswer();
        delay(1000,() => {
          if (questionNumber === 13) {
            setStop(true);
          } else {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
          }
        });
      } else {
        wrongAnswer();
        delay(1000,() => {
          setStop(true);
        });
      }
    });
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
