import { useState } from "react";

export default function Answer() {
    const [answer, setAnswer] = useState("")
    return(
        <main>
            <button onClick={(e) => {setAnswer(trivia.answer)}}>Click to Reveal Question</button>
            <p>{answer}</p>
        </main>
    )
}