import { useState } from "react"

export default function QuestionCreate({ question, questionIndex, setQuestions, title }) {
   //  const [questionState, setQuestionState] = useState({ title: '', answers: ['', '', '', ''], correctAnswer: 1 })

    /*const handleAnswerChange = (index, value) => {
        setQuestionState(prev => {
            const newAnswers = [...prev.answers]
            newAnswers[index] = value
            return { ...prev, answers: newAnswers }
        })
    }*/

    const setQuestionTitle = (title) => {
        setQuestions((prev) => {
            const updated = [...prev];
            updated[questionIndex] = {...updated[questionIndex], title: title}
            return updated
        })
    } 
    /*
    [{
            id: Date.now().toString() + Math.random.toString().substr(2, 9),
            title: '',
            options: ['', '', '', ''],
            correctAnswer: 0
}]
    */

    const handleAnswerChange = (index, answer) => {
        setQuestions(prev => {
            const updated = [...prev]
            updated[questionIndex] = {
                ...updated[questionIndex],
                options: updated[questionIndex].options.map((opt, idx) => idx === index ? answer : opt)
            }
            return updated
        })
    }

    const selectCorrectAnswerHandler = (correctAns) => {
        setQuestions((prev) => {
            const updated = [...prev];
            updated[questionIndex] = {...updated[questionIndex], correctAnswer: correctAns}
            return updated
        })
    }

    return (
        <div >
            <p>Question {questionIndex + 1}</p>
            <p>Question content</p>
            <input type="text" className="pl-4 pr-2 py-2 border rounded-lg bg-white w-full" placeholder="Enter your question"
                value={question.title}
                onChange={(e) => setQuestionTitle(e.target.value)}
            ></input>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(1)} checked={question.correctAnswer == 1} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="A"
                    value={question.options[0]}
                    onChange={e => handleAnswerChange(0, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(2)} checked={question.correctAnswer == 2} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="B"
                    value={question.options[1]}
                    onChange={e => handleAnswerChange(1, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(3)} checked={question.correctAnswer == 3} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="C"
                    value={question.options[2]}
                    onChange={e => handleAnswerChange(2, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(4)} checked={question.correctAnswer == 4} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 " placeholder="D"
                    value={question.options[3]}
                    onChange={e => handleAnswerChange(3, e.target.value)}
                ></input>
            </div>
        </div>
    )
}