import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
export default function Header() {
    const { user, logout } = useAuth()
    const router = useRouter()
    return (
        <div>
            {user ? (
                <div>
                    <button onClick={() => logout()} className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer">
                        Logout
                    </button>
                </div>)
                :
                (<div>
                    <button onClick={() => router.push('/register')} className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer">
                        Register
                    </button>
                    <button onClick={() => router.push('/login')} className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer">
                        Login
                    </button>
                </div>)}
            <h1 className="text-center text-4xl font-bold">Quiz generator</h1>
            <p className="pt-[12px]">Create, edit and solve interactive quizzes</p>
        </div>
    )
}