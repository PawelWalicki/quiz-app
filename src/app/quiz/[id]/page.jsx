'use client'
import { useEffect, useState, use } from "react"
import { useParams } from "next/navigation"
import { Question } from "@/components/question"
import QuizResult from "@/components/quiz-result"

export default function QuizId() {
    const [quizResult, setQuizResult] = useState(null)
    const [quizState, setQuizState] = useState("inProgress") // inProgress, waitingForCheck, quizEnded
    const [showDialogResult, setShowDialogResult] = useState(false)
    const [choseAnswers, setChoseAnswers] = useState([])
    const [quiz, setQuiz] = useState({})
    const params = useParams()
    useEffect(() => {
        fetch(`/api/quiz/${params.id}`) 
            .then(respone => respone.json())
            .then(json => setQuiz(json))
            .catch(e => console.error(e));
    }, [])

    const handleQuizSubmit = async () => {

        setQuizState("waitingForCheck")
        const response = await fetch(`/api/quiz/checkQuiz`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ quizId: params.id, answers: choseAnswers })
        })
        const resulJSON = await response.json()
        setQuizResult(resulJSON)
        setQuizState("quizEnded")
        setShowDialogResult(true)
    }

    return (
        <div className="bg-gray-200 text-black h-full p-[5vh] flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl mb-6">{quiz.quizTitle}</h1>
            <h2 className="font-bold text-2xl mb-5">{quiz.quizDescription}</h2>
            <div className="md:min-w-3xl md:max-w-4xl bg-[#F5EFE6] rounded-lg shadow p-6 w-full">
                {quiz.questions?.map((q, idx) => (
                    <Question key={q.id} choseAnswers={choseAnswers} setChoseAnswers={setChoseAnswers} idx={idx} question={q} />
                ))}
            </div>
            <div className="flex justify-center p-4 w-full">
                <button className="bg-[#6D94C5] text-black w-1/4 py-2 px-4 md:mt-0 rounded-lg  hover:bg-blue-700 transition hover:cursor-pointer"
                    onClick={() => handleQuizSubmit()}>
                    End
                </button>
            </div>
            {quizState == "quizEnded" && showDialogResult && (
                <QuizResult quizResult={quizResult} setShowDialogResult={setShowDialogResult}/>
            )}
        </div>

    )
}
