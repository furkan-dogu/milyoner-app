import { useEffect, useState } from "react";
import Pyramid from "../components/Pyramid";
import Trivia from "../components/Trivia";
import { moneyPyramid } from "../helpers/moneyPyramid";

const Home = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₺ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((item) => item.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);

  return (
    <>
      <main className="main">
        {stop ? (
          <h1 className="endText">Kazancınız: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
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
      </main>
      <Pyramid questionNumber={questionNumber} moneyPyramid={moneyPyramid} />
    </>
  );
};

export default Home;
