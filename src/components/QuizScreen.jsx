import {useRef, useState} from 'react';

import QuestionList from '../data/problems.json';

import Question from "./Question.jsx";
import QuizResult from "./Results.jsx";
import Timer from "./Timer.jsx";

function QuizScreen({retry}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const timer = useRef(null);
    var isQuestionEnded = currentQuestionIndex === QuestionList.length;

    const handleTimeUp = () => {
        setCurrentQuestionIndex(QuestionList.length);
    };

    function calculateResult(){
        console.log(markedAnswers);
        let correct = 0;
        QuestionList.forEach((question, index) => {
            if (question.correctIndex == markedAnswers[index]) {
                correct++;
            }
        });
        return {
                total: QuestionList.length,
                correct: correct,
                percentage: Math.trunc((correct / QuestionList.length) * 100)
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
                                question={QuestionList[currentQuestionIndex]}
                                totalQuestions={QuestionList.length}
                                currentQuestion={currentQuestionIndex + 1}
                                setAnswer={(index) => {
                                    setMarkedAnswers((arr) => {
                                        let newArr = [...arr];
                                        newArr[currentQuestionIndex - 1] = index;
                                        return newArr;
                                    });
                                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                                }}
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

