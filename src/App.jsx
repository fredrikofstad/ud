import { useState } from 'react'
import QuizScreen from './components/QuizScreen.jsx';
import StartScreen from './components/StartScreen.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css'

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    return (
        <>
            <Navbar/>
            console.log(currentQuestionIndex);
            <div className="quiz-container">
                {
                    isQuizStarted ? (
                        <QuizScreen retry={()=> setIsQuizStarted(false)}/>
                    ) : (
                        <StartScreen start={()=> setIsQuizStarted(true)}/>
                    )
                }
            </div>

        </>

    );
}

export default App
