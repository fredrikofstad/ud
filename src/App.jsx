import { useState } from 'react'
import QuestionList from './data/problems.json'
import { shuffle } from 'lodash';

import QuizScreen from './components/QuizScreen.jsx';
import StartScreen from './components/StartScreen.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css'

function App() {
    const tasks = QuestionList;
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    return (
        <>
            <Navbar/>
            <div className="quiz-container">
                {
                    isQuizStarted ? (
                        <QuizScreen
                            retry={()=> setIsQuizStarted(false)}
                            tasks = { tasks }
                        />
                    ) : (
                        <StartScreen start={()=> setIsQuizStarted(true)}/>
                    )
                }
            </div>

        </>

    );
}

export default App
