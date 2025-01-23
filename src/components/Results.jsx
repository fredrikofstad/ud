import {tasks} from "../data/images.js"

function QuizResult({result, retry}) {
    return (
        <>
            <div className="result-screen">
                <h2>Result: {result.percentage}%</h2>
                <p>Answered {result.correct} correctly out of {result.total}.</p>
                <button onClick={retry}>Retry</button>
            </div>
            <div className="incorrect">
                <h2>Incorrect Answers</h2>
                <ul>
                    {result.incorrect.map((item, index) => (
                        <>
                            <br/><br/>
                            <li key={index}>
                                <img src={tasks[item.image - 1]} alt={`Task image for ${index}`}/>
                                <p><strong>Correct Answer:</strong> {parseInt(item.correctIndex, 10) + 1}</p>
                                <p><strong>Explanation:</strong> {item.explanation}</p>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default QuizResult;