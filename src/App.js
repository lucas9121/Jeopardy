import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import GetQuestionBtn from "./components/GetQuestionBtn";
import Score from "./components/Score";
import Info from "./components/Info";
import Answer from "./components/Answer";

export default function App () {
    const [ trivia, setTrivia ] = useState("")
    const [show, setShow] = useState(false)

    const getData = async () => {
        try {
            const response = await fetch('https://jservice.io/api/random')
            const data = await response.json()
            setTrivia(data[0])
        } catch(e){
            console.error(e)
        }
    }
    const score = document.getElementById('score-number')
    const points = document.getElementById('points')

    return(
        <div className="App">
            <Header />
            <Score trivia={trivia} />
            <GetQuestionBtn question={getData} setShow={setShow} />
            <Info trivia={trivia} />
            <Answer trivia={trivia} show={show} setShow={setShow} />
        </div>

    )
}