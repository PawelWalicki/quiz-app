'use client'
import { useEffect, useState, use } from "react"
import { useParams } from "next/navigation"
import { Question } from "@/components/question"

export default function QuizId() {
    const [isQuizEnded, setIsQuizEnded] = useState(false)
    const [choseAnswers, setChoseAnswers] = useState([])
    const [quiz, setQuiz] = useState({})
    const params = useParams()
    useEffect(() => {
        fetch(`/api/quiz/${params.id}`)
            .then(respone => respone.json())
            .then(json => setQuiz(json))
            .catch(e => console.error(e));
    }, [])
    if (!isQuizEnded) {
        return (
            <div className="bg-gray-200 text-black h-full p-[5vh] flex flex-col ">
                <h1 className="font-bold text-3xl mb-6">{quiz.quizTitle}</h1>
                <h2 className="font-bold text-2xl mb-5">{quiz.quizDescription}</h2>
                <div className="max-w-md bg-white rounded-lg shadow p-6">
                    {quiz.questions?.map((q, idx) => (
                        <Question choseAnswers={choseAnswers} setChoseAnswers={setChoseAnswers} idx={idx} question={q} />
                    ))}
                </div>
                <button className="bg-blue-600 text-white w-15 py-2 px-4 md:mt-0 rounded-lg  hover:bg-blue-700 transition hover:cursor-pointer"
                    onClick={() => setIsQuizEnded(true)}>
                    End
                </button>
            </div>
        )
    }
    return (
        <div>DIALOG Z WYNIKAMI</div>
    )
}
