import { useState } from "react"
export default function Score({trivia}) {
    const [scoreNum, setScoreNum] = useState(0)
    return(
        <main>
            <div id="score">
                <h2 className="h2">Score: <span id="score-number">{scoreNum}</span></h2>
            </div>
            <div id="buttons">
                <button style={{backgroundColor: 'indianred'}} onClick={(e) => {setScoreNum(scoreNum - trivia.value)}}>Decrease</button>
                <button style={{backgroundColor: 'darkcyan'}} onClick={(e) => {setScoreNum(scoreNum + trivia.value)}}>Increase</button>
                <button style={{backgroundColor: 'firebrick'}} onClick={(e) => {setScoreNum(0)}}>Reset</button>
            </div>
        </main>
    )
}