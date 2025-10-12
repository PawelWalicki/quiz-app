'use client'
import { useEffect, useState } from "react"
import { QuizGrid } from "./quiz-grid";

export default function QuizList() {

    const [quizzes, setQuizzes] = useState([])
    useEffect(() => { 
        fetch('/api/quiz')
            .then(response => response.json())  
            .then(json => setQuizzes(json))
            .catch(error => console.error("Błąd pobierania:", error));

    }, [])
    if (quizzes.length === 0)
        return (
            <div>Loading...</div>)


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 w-full">
            {quizzes.map((e) => (
                <QuizGrid key={e.id} quiz={e} ></QuizGrid>
            ))}
        </div>
    )
}