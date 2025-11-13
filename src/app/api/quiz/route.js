/*
POST => Dodaj do bazy (payload)
GET => Pobierz z bazy (parametry)
PUT => Zmodyfikuj w bazie (payload)
DELETE => Usun z bazy (id)
*/

import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { ref, set, get } from "firebase/database"
// [Przeg] <--GET/POST-> [Server] <----get/set/ref---> [Firebase]
export async function GET(request) {
    try {
        const snapshot = await get(ref(db, 'quizzes'))
        if (snapshot.exists()) {
            const data = snapshot.val()
            const quizzez = Object.values(data).map(quiz => (
                {
                    ...quiz,
                    questions: quiz.questions.map(({correctAnswer, ...rest}) => rest)
                }
            ))

            return NextResponse.json(quizzez, { status: 200 })
        } else {
            return NextResponse.json(JSON.stringify([]), { status: 404 })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(JSON.stringify(error), { status: 500 })
    }
}

const validatePostData = (quizData) => {
    const emptyFields = []
    if (!quizData.quizTitle) {
        emptyFields.push('Lack of quiz title')
    }
    console.log(quizData.quizDescription)
    if (!quizData.quizDescription) {
        emptyFields.push('Lack of description')
    }
    quizData.questions.forEach((question, index) => {
        if (!question.title) {
            emptyFields.push(`Question ${index + 1}- no title`)
        }
        if (question.correctAnswer < 1) {
            emptyFields.push(`Question ${index + 1}- correct answer not set`)
        }
    });
    return emptyFields
}

export async function POST(request) {
    try {
        const data = await request.json()
        const validate = validatePostData(data)
        if (validate.length > 0) {
            return NextResponse.json({ error: validate }, { status: 400 })
        }
        const id = `quiz_${Date.now()}`
        const now = Date.now()
        try {
            await set(ref(db, `quizzes/${id}`), { id, createdAt: now, ...data })

        }
        catch (e) {
            console.error(e)
        }
        return NextResponse.json({ success: true, message: "Quiz saved" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Failed to save quiz" }, { status: 500 })
    }
}

 