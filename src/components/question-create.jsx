
export default function QuestionCreate({ question, questionIndex, setQuestions, title }) {
 
    const setQuestionTitle = (title) => {
        setQuestions((prev) => {
            const updated = [...prev];
            updated[questionIndex] = {...updated[questionIndex], title: title}
            return updated
        })
    } 
  
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
                <input type="radio" onChange={() => selectCorrectAnswerHandler(0)} checked={question.correctAnswer == 0} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 hover:cursor-pointer" placeholder="A"
                    value={question.options[0]}
                    onChange={e => handleAnswerChange(0, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(1)} checked={question.correctAnswer == 1} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 hover:cursor-pointer" placeholder="B"
                    value={question.options[1]}
                    onChange={e => handleAnswerChange(1, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(2)} checked={question.correctAnswer == 2} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 hover:cursor-pointer" placeholder="C"
                    value={question.options[2]}
                    onChange={e => handleAnswerChange(2, e.target.value)}
                ></input>
            </div>
            <div>
                <input type="radio" onChange={() => selectCorrectAnswerHandler(3)} checked={question.correctAnswer == 3} />
                <input type="text" className="pl-4 pr-1 py-1 border rounded-lg bg-white m-2 hover:cursor-pointer" placeholder="D"
                    value={question.options[3]}
                    onChange={e => handleAnswerChange(3, e.target.value)}
                ></input>
            </div>
        </div>
    )
}