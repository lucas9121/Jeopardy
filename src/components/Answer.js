import { useState } from "react";

export default function Answer({trivia, show, setShow}) {
    const [answer, setAnswer] = useState("")
    return(
        <main className="info-display">
            {!show ? 
            <button style={{backgroundColor: 'naby', color: 'aliceblue'}} id="button-reveal" onClick={(e) => {setAnswer(trivia.answer); setShow(true)}}>Click to Reveal Question</button> :
            <p>{answer}</p>
            }
        </main>
    )
}