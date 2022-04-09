export default function Info({trivia}) {
    return(
        <main>
            <div className="info-display">
                <h2 className="h2"> Category: </h2>
                <p>{trivia ? trivia.category.title : null} </p>
            </div>
            <div className="info-display">
                <h2 className="h2"> Points: </h2>
                <p>{trivia.value} </p>
            </div>
            <div className="info-display">
                <h2 className="h2"> Answer: <span id="answer">{trivia.question}</span></h2>
                {/* <p>{trivia.question}</p> */}
            </div>
        </main>
    )
    
}