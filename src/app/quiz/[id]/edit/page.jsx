'use client'
import QuestionCreate from "@/components/question-create"
import { useState, useEffect, use } from "react"
import { useRouter, useParams } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';

export default function QuizCreate() {
    const [createdAt, setCreatedAt] = useState(null)
    const [id,setId] = useState("")
    const [questions, setQuestions] = useState([])
    const [quizTitle, setQuizTitle] = useState("")
    const [quizDescription, setQuizDescription] = useState("")
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        fetch(`/api/quiz/${params.id}`)
            .then(respone => respone.json())
            .then(json => {
                setCreatedAt(json.createdAt)
                setId(json.id)
                setQuestions(json.questions)
                setQuizTitle(json.quizTitle)
                setQuizDescription(json.quizDescription)
            })
            .catch(e => console.error(e));
    }, [])

    function createEmptyQuestion() {
        return {
            id: Date.now().toString(),
            title: '',
            options: ['', '', '', ''],
            correctAnswer: -1
        }
    }

    const showToasts = (messages) => {
        messages.forEach(msg => {
            toast.error(msg)
        })
    }

    async function handleSave() {
        const quizData = {
            createdAt,
            id,
            quizTitle,
            quizDescription,
            questions
        }
        try {
            const response = await fetch(`/api/quiz/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(quizData)
            })
            const responseBody = await response.json()
            if (response.ok) {
                router.push("/?edited=true")
            }
            if (!response.ok) {
                console.log(response.status)
                console.log(responseBody.error)
                showToasts(responseBody.error)
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="bg-gray-200 h-full text-black p-[5vh] ">
            <ToastContainer />
            <div className="flex flex-row items-center">
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition hover:cursor-pointer rounded-lg "
                    onClick={() => router.push("/")}>
                    Back
                </button>
                <p className="pl-2">Create new quiz</p>
            </div>
            <div className="bg-white border rounded-lg p-3 mt-4" >
                <p>Basic information</p>
                <p>Title quiz</p>
                <input type="text"
                    className="pl-4 pr-2 py-2 border rounded-lg bg-white w-full " placeholder="Enter the quiz title" value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)}></input>
                <p>Description</p>
                <textarea type="text"
                    className="pl-4 pr-2 py-2 border w-full rounded-lg bg-white" placeholder="Short description of quzi (optional)" value={quizDescription} onChange={(e) => setQuizDescription(e.target.value)}></textarea>
            </div>
            <div className="bg-white border rounded-lg p-3 mt-4">
                {
                    questions.map((question, questionIndex) => (
                        <QuestionCreate key={questionIndex} title={question.title} question={question} questionIndex={questionIndex} setQuestions={setQuestions}></QuestionCreate>
                    ))
                }
            </div>
            <div className="flex flex-row " >
                <button
                    className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition hover:cursor-pointer rounded-lg "
                    onClick={() => setQuestions(prev => [...prev, createEmptyQuestion()])}>
                    + Add question
                </button>
                <button
                    className="bg-green-600 text-white py-2 px-4 mt-4 rounded-lg flex items-center gap-2 hover:bg-green-700 transition hover:cursor-pointer rounded-lg ml-4"
                    onClick={() => handleSave()}>
                    Save
                </button>
            </div>
        </div>
    )
}