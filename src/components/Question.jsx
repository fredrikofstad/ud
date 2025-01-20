import {useState, useEffect, useRef} from 'react';
import {flushSync} from "react-dom";
import {tasks} from "../data/images.js"

const secondsPerQuestion = 60;

function Question({question, currentQuestion, setAnswer, completed, setCompleted, ended}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    if (ended) {
        return null; // Remove the timer from the DOM
    }

    function next(){
        setCompleted(completed+1);
        gotoNextQuestion();
    }

    function gotoNextQuestion() {
        if(timer.current) {
            clearTimeout(timer.current);
        }
        flushSync(()=>{
            setAnswer(selectedOption);
        });

        setSelectedOption(null);
    }

    useEffect(() => {
        progressBar.current.classList.remove('active');
        setTimeout(() => {
            progressBar.current.classList.add('active');
        },0);
        timer.current = setTimeout(gotoNextQuestion, secondsPerQuestion * 1000);
        return gotoNextQuestion;
    }, [question]);

    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className="question-count">
                Task: <b> {currentQuestion} </b>
            </div>
            <div className="main">
                <div className="title">
                    <img src={tasks[question.image-1]} alt="Task"/>
                </div>
                <div className="options">
                {
                        question.options.map((option, index) => {
                            return (
                                <div
                                    className={index == selectedOption ? "option active" : "option"}
                                    key={index}
                                    onClick={() => setSelectedOption(index)}
                                >
                                    {""}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="control">
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Question;