import { useState } from "react"

export default function QuestionCreate({ question, questionIndex }) {
    const [questionState, setQuestionState] = useState({ title: '', answers: ['', '', '', ''], correctAnswer: 1 })

    const handleAnswerChange = (index, value) => {
        setQuestionState(prev => {
            const newAnswers = [...prev.answers]
            newAnswers[index] = value
            return { ...prev, answers: newAnswers }
        })
    }

    return (
        <div >
            <p>Question {questionIndex + 1}</p>
            <p>Question content</p>
            <textarea type="text" className="pl-4 pr-2 py-2 border rounded-lg bg-white w-full" placeholder="Enter your question"
                value={questionState.title}
                onChange={(e) => setQuestionState((prev) => ({ ...prev, title: e.target.value }))}
            ></textarea>
            <div>
                <input type="radio" checked={questionState.correctAnswer == 1} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="A"
                    value={questionState.answers[0]}
                    onChange={e => handleAnswerChange(0, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" checked={questionState.correctAnswer == 2} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="B"
                    value={questionState.answers[1]}
                    onChange={e => handleAnswerChange(1, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" checked={questionState.correctAnswer == 3} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="C"
                    value={questionState.answers[2]}
                    onChange={e => handleAnswerChange(2, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" checked={questionState.correctAnswer == 4} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="D"
                    value={questionState.answers[3]}
                    onChange={e => handleAnswerChange(3, e.target.value)}
                ></input>
            </div>
        </div>
    )
}