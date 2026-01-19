'use client'
import { useRouter } from "next/navigation"

export default function CreateButton() {
    const router = useRouter()
    return(
        <button 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
        onClick={() => router.push('/quiz/create')}
        >
            + Create new quiz
        </button>
    )
}