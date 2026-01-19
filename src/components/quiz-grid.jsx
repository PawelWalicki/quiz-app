'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function daysSinceTimestamp(timestamp) {
    const now = Date.now();
    const differenceInMs = now - timestamp;
    const days = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    return days;
}

export const QuizGrid = ({ quiz }) => {
    const router = useRouter()
    const {user} = useAuth()
    const handleDelete = () => {
        fetch(`api/quiz/${quiz.id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("reload")
            window.location.reload()
        })
    }
    // [c] -GET POST PUT DELETE-> [s] -get remove edit-> [db]
    return (
        <div className="m-4 p-2 max-w-md bg-white rounded-lg shadow p-5">
            <h3 className="font-bold text-lg mb-1">
                <Link href={`/quiz/${quiz.id}`}>
                    {quiz.quizTitle}
                </Link>
            </h3>
            <p className="mb-4 text-gray-600">{quiz.quizDescription}</p>

            <div className="flex gap-4 mb-3 text-gray-500 text-sm items-center">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5e5e5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    <span>{quiz.questions.length} questions</span>
                </div>
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5e5e5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                    <span>{daysSinceTimestamp(quiz.createdAt)} days ago</span>
                </div>
            </div>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-4">Quiz</span>

            <div className="flex gap-3 items-center ">
                <Link className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded "
                    href={`/quiz/${quiz.id}`}>
                    <button className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Start
                    </button>
                </Link>
                {
                    user !== null && quiz.uid == user.uid ?
                    <div className="flex gap-1 items-center ">
                        <Link href={`/quiz/${quiz.id}/edit`}>
                            <button className="p-2 border rounded-lg shadow-md hover:bg-gray-100 hover:cursor-pointer" title="Edit">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.5 3.5a2.121 2.121 0 013 3l-9 9-4 1 1-4 9-9z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                        <button className="p-2 border rounded-lg shadow-md hover:bg-gray-100 hover:cursor-pointer" title="Delete" onClick={(() => handleDelete())}>
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    :
                    <div/>
                }

            </div>
        </div>
    )
}