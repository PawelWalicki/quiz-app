'use client'
import { useRouter } from "next/navigation"

export default function CreateButton() {
    const router = useRouter()
    return(
        <button 
        className="bg-blue-600 text-white py-2 px-4 mt-2 md:mt-0 rounded-lg gap-2 hover:bg-blue-700 transition hover:cursor-pointer"
        onClick={() => router.push('/quiz/create')}
        >
            + Create new quiz
        </button>
    )
}