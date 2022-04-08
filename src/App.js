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
            <GetQuestionBtn question={getData} />
            <div>
                <p>Question: {trivia.question}</p>
                <p>Category: {trivia.category.title} </p>
                <p>Points: {trivia.value} </p>
            </div>
            <div>
                <p>Answer: {trivia.answer} </p>
            </div>
        </div>

    )
}