'use client'
import { useState, useEffect, use } from "react"
import { useRouter, useParams } from "next/navigation"
import { QuziForm } from "@/components/quiz-form";
import { useAuth } from "@/context/AuthContext";


export default function QuizCreate() {
    const [createdAt, setCreatedAt] = useState(null)
    const [id, setId] = useState("")
    const [questions, setQuestions] = useState([])
    const [quizTitle, setQuizTitle] = useState("")
    const [quizDescription, setQuizDescription] = useState("")
    const router = useRouter()
    const params = useParams()
    const {user, loading} = useAuth()

    useEffect(() => {
        fetch(`/api/quiz/${params.id}`)
            .then(respone => respone.json())
            .then(json => {
                if(!loading && user.uid == json.uid) {
                setCreatedAt(json.createdAt)
                setId(json.id)
                setQuestions(json.questions)
                setQuizTitle(json.quizTitle)
                setQuizDescription(json.quizDescription)
                } else {
                    router.push("/")
                }
            })
            .catch(e => console.error(e));
    }, [user])

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
        <QuziForm setQuizTitle={setQuizTitle} setQuizDescription={setQuizDescription} questions={questions}
            setQuestions={setQuestions} createEmptyQuestion={createEmptyQuestion} handleSave={handleSave} quizTitle={quizTitle} quizDescription={quizDescription} />
    )
}