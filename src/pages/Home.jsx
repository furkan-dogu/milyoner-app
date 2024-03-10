import { useEffect, useState } from "react";
import Pyramid from "../components/Pyramid";
import Trivia from "../components/Trivia";
import { moneyPyramid } from "../helpers/moneyPyramid";
import Timer from "../components/Timer";
import Start from "../components/Start";

const Home = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₺ 0");
  const [username, setUsername] = useState(null);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  return (
    <>
      {username ? (
        <>
          <main className="main">
            {stop ? (
              <>
                  <h1 className="endText">
                  {questionNumber === 13 ? `Tebrikler ${username}, yarışmayı kazandın!` : `${earned} kazandınız.`}
                </h1>
                <button className="restartButton" onClick={() => window.location.reload()}>Tekrar Oyna</button>
              </>

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
          </main>
          <Pyramid
            questionNumber={questionNumber}
            moneyPyramid={moneyPyramid}
          />
        </>
      ) : (
        <Start setUsername={setUsername} />
        
      )}
    </>
  );
};

export default Home;
