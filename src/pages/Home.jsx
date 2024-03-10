import { useState } from 'react'
import Pyramid from '../components/Pyramid'

const Home = () => {
    const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <>
        <main className="main">main</main>
        <Pyramid questionNumber={questionNumber} />
    </>
  )
}

export default Home