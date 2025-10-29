import { NextResponse } from "next/server"
import { get, ref } from "firebase/database"
import { db } from "@/lib/firebase"

export async function POST(request) {
    const body = await request.json()   // [Client] -request(payload, header, options...)-> [Server] <-snapshot- [DB]
    console.log(body)
    const snapshot = await get(ref(db, `quizzes/${body.quizId}`))
    if (snapshot.exists()) {
        let correctAnsCounter = 0
        snapshot.val().questions.map((e, idx) => {
            if (e.correctAnswer == body.answers[idx])
                correctAnsCounter++
        }
        )
        console.log(correctAnsCounter)
        return NextResponse.json({numberOfCorrectAnswers: correctAnsCounter, numberOfQuestions: snapshot.val().questions.length}, { status: 200 })
    } else {
        return NextResponse.json({ error: "Quiz not found" }, { status: 404 })
    }
}
