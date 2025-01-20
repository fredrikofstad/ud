function QuizResult({result, retry}) {
    console.log(result.array);
    console.log(result.tasks);
    return (
        <div className="result-screen">
            <h2>Result: {result.percentage}%</h2>
            <p>Answered {result.correct} correctly out of {result.total}.</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default QuizResult;