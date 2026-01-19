'use client'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "@/lib/firebase"
import { set, ref } from "firebase/database"
import { useRouter } from "next/navigation"

export default function Register ({ })  {
    const [userName, setUsername] = useState("")
    const [userMail, setUserMail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const cred = await createUserWithEmailAndPassword(auth, userMail, password)
            const user = cred.user
            await set(ref(db, `users/${user.uid}`), {
                email: userMail,
                displayName: userName,
                createdAt: Date.now()
            })
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8 text-black">
            <div className="flex flex-col items-center max-w-md w-full space-y-6">
                <form onSubmit={handleSubmit} className="w-full space-y-4 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Registration</h2>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">User name</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">E-mail address</label>
                        <input
                            type="email"
                            value={userMail}
                            onChange={(e) => setUserMail(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={5}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
                    >
                        Sign Up!
                    </button>
                </form>

                <div className="flex flex-col items-center space-y-2 text-gray-600">
                    <div>You have account?</div>
                    <button
                        onClick={() => router.push("/login")}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 hover:curosr-pointer"
                    >
                        Go to login
                    </button>
                </div>
            </div>
        </div>
    )
}