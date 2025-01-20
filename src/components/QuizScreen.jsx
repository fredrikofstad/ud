import {useRef, useState} from 'react';

import Question from "./Question.jsx";
import QuizResult from "./Results.jsx";
import Timer from "./Timer.jsx";


function QuizScreen({retry, tasks}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(tasks.length));
    const timer = useRef(null);
    const isQuestionEnded = currentQuestionIndex === tasks.length;

    const handleTimeUp = () => {
        setCurrentQuestionIndex(tasks.length);
    };

    function calculateResult(){
        let correct = 0;
        tasks.forEach((question, index) => {
            if (question.correctIndex == markedAnswers[index]) {
                correct++;
            }
        });
        return {
                array: markedAnswers,
                tasks: tasks,
                total: completed,
                correct: correct,
                percentage: Math.trunc((correct / completed) * 100)
        };
    }

    return (
        <div>
            <div className="quiz-screen">
                {
                    isQuestionEnded ? (
                        <QuizResult
                            result={calculateResult()}
                            retry={retry}
                        />
                    ) : (
                        <div>
                            <Question
                                question={tasks[currentQuestionIndex]}
                                currentQuestion={currentQuestionIndex + 1}
                                setAnswer={(index) => {
                                    setMarkedAnswers((arr) => {
                                        let newArr = [...arr];
                                        newArr[currentQuestionIndex - 1] = index;
                                        return newArr;
                                    });
                                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                                }}
                                completed={completed}
                                setCompleted={setCompleted}
                                ended={isQuestionEnded}
                            />
                        </div>

                    )

                }
            </div>
                <div className="timer">
                    <Timer onTimeUp={handleTimeUp}/>
                </div>
            </div>
            );
            }

            export default QuizScreen;

