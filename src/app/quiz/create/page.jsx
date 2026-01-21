'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { QuziForm } from "@/components/quiz-form";
import { toast } from 'react-toastify';
import { useAuth } from "@/context/AuthContext";

export default function QuizCreate() {
    const [questions, setQuestions] = useState([createEmptyQuestion()])
    const [quizTitle, setQuizTitle] = useState("")
    const [quizDescription, setQuizDescription] = useState("")
    const router = useRouter()
    const {user} = useAuth()

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
            quizTitle,
            quizDescription,
            questions,
            uid: user.uid
        }

        try {
            const response = await fetch('/api/quiz', {
                method: "POST",
                body: JSON.stringify(quizData)
            })
            const responseBody = await response.json()
            if(response.ok) {
                router.push("/?created=true")
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
        <QuziForm setQuizTitle={setQuizTitle} setQuizDescription={setQuizDescription} questions={questions} pageTitle="Create new quiz"
        setQuestions={setQuestions} createEmptyQuestion={createEmptyQuestion} handleSave={handleSave} quizTitle={quizTitle} quizDescription={quizDescription}/>
    )
}