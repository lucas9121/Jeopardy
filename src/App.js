import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import GetQuestionBtn from "./components/GetQuestionBtn";
import { useState, useEffect } from 'react'

export default function App () {
    const [ trivia, setTrivia ] = useState("")

    const getData = async () => {
        try {
            const response = await fetch('https://jservice.io/api/random')
            const data = await response.json()
            setTrivia(data[0])
        } catch(e){
            console.error(e)
        }
    }
    // const getQuestion = () => {
    //     setQuestion(('This is the question').toUpperCase())
    // }

    // useEffect(() => {
    //     getQuestion()
    // },)


    return(
        <div className="App">
            <Header />
            <div id="score-tracker">
                <div id="score">
                    <h2 className="h2">Score: </h2>
                    <h2 className="h2">0</h2>
                </div>
                <div id="buttons">
                    <button>Decrease</button>
                    <button>Increase</button>
                    <button>Reset</button>
                </div>
            </div>
            <GetQuestionBtn question={getData} />
            <div id="info-display">
                <div className="info-display-div">
                    <h2 className="h2"> Category: </h2>
                    <p>{trivia.category.title} </p>
                </div>
                <div className="info-display-div">
                    <h2 className="h2"> Points: </h2>
                    <p>{trivia.value} </p>
                </div>
                <div className="info-display-div">
                    <h2 className="h2"> Answer: </h2>
                    <p>{trivia.question}</p>
                </div>
            </div>
            <div id="reveal">
                <button>Click to Reveal Question</button>
                <p>{trivia.answer}</p>
            </div>
        </div>

    )
}