import QuestionCreate from "@/components/question-create"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation"


export const QuziForm = ({ setQuizTitle, setQuizDescription, questions, setQuestions, createEmptyQuestion, handleSave, quizDescription, quizTitle, pageTitle }) => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 h-full text-black p-[5vh] ">
            <ToastContainer />
            <div className="flex flex-row items-center">
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-700 transition duration-200 transform hover:-translate-y-0.5 hover:cursor-pointer rounded-lg "
                    onClick={() => router.push("/")}>
                    Back
                </button>
                <p className="pl-2">{pageTitle}</p>
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
                    className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-700 transition duration-200 transform hover:-translate-y-0.5 hover:cursor-pointer rounded-lg "
                    onClick={() => setQuestions(prev => [...prev, createEmptyQuestion()])}>
                    + Add question
                </button>
                <button
                    className="bg-green-600 text-white py-2 px-4 mt-4 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-700 transition duration-200 transform hover:-translate-y-0.5 hover:cursor-pointer rounded-lg ml-4"
                    onClick={() => handleSave()}>
                    Save
                </button>
            </div>
        </div>
    )
}