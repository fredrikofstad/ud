import { useState } from 'react'
import QuizScreen from './components/QuizScreen.js';
import StartScreen from './components/StartScreen.js';
import Navbar from './components/Navbar.jsx';
import './App.css'

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    return (
        <>
            test-app
            <Navbar/>
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
