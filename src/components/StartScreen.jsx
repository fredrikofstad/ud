function StartScreen({start}) {
    return (
        <div className="start-screen">
            <h2>Start Test</h2>
            <p>You have 12 minutes and 1 minute per question</p>
            <button onClick={start}>Start</button>
        </div>
    )

}

export default StartScreen;

