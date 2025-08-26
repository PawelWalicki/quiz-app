'use client'
import QuestionCreate from "@/components/question-create"
import { useState } from "react"

export default function QuizCreate() {
    const [questions, setQuestions] = useState([createEmptyQuestion()])

    function createEmptyQuestion() {
        return {
            id: Date.now().toString() + Math.random.toString().substr(2, 9),
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0
        }
    }
    return (
        <div className="bg-gray-200 h-full text-black p-[5vh] ">
            <div className="flex flex-row items-center">
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition hover:cursor-pointer rounded-lg ">
                    Back
                </button>
                <p className="pl-2">Create new quiz</p>
            </div>
            <div className="bg-white border rounded-lg p-3 mt-4" >
                <p>Basic information</p>
                <p>Title quiz</p>
                <input type="text"
                    className="pl-4 pr-2 py-2 border rounded-lg bg-white w-full " placeholder="Enter the quiz title"></input>
                <p>Description</p>
                <textarea type="text"
                    className="pl-4 pr-2 py-2 border w-full rounded-lg bg-white" placeholder="Short description of quzi (optional)"></textarea>
            </div>
            <div className="bg-white border rounded-lg p-3 mt-4">
                {
                    questions.map((question, questionIndex) => (
                      <QuestionCreate key={questionIndex} question={question} questionIndex = {questionIndex}></QuestionCreate>
                    ))
                }
            </div>
            <button
                className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition hover:cursor-pointer rounded-lg "
                onClick={() => setQuestions(prev => [...prev, createEmptyQuestion()])}>
                + Add question
            </button>
        </div>
    )
}