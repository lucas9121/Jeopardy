import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import GetQuestionBtn from "./components/GetQuestionBtn";
import { useState, useEffect } from 'react'

export default function App () {
    const [ question, setQuestion ] = useState(null)

    const getQuestion = async () => {
        try {
            const response = await fetch('https://jservice.io/api/random')
            const data = await response.json()
            setQuestion(data[0].question)
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
            <GetQuestionBtn question={getQuestion} />
            <p>Question: {question}</p>
        </div>

    )
}