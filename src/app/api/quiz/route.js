/*
POST => Dodaj do bazy (payload)
GET => Pobierz z bazy (parametry)
PUT => Zmodyfikuj w bazie (payload)
DELETE => Usun z bazy (id)
*/

import { NextResponse } from "next/server"

export async function GET(request) {
    const quiz = [
        {id: "123", title: "Jak ma na imie mlody Stuhr", correctAnswer: 1, options: ["Maciej", "Bartek", "Arek", "Wojtek"]}
    ]

    return new Response(JSON.stringify(quiz), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}

const validatePostData = (quizData) => {
    const emptyFields = []
    if(!quizData.quizTitle) { 
        emptyFields.push('Lack of quiz title')
    }
    console.log(quizData.quizDescription)
    if(!quizData.quizDescription) {
        emptyFields.push('Lack of description')
    }
    quizData.questions.forEach((question, index) => {
        if(!question.title) {
            emptyFields.push(`Question ${index + 1}- no title`)
        }
        if(question.correctAnswer < 1){
            emptyFields.push(`Question ${index + 1}- correct answer not set`)
        }
    });
    return emptyFields
}

export async function POST(request) {
    try { 
        const data = await request.json()
        const validate = validatePostData(data)
        if(validate.length>0) {
            return NextResponse.json({error: validate}, {status: 400})
        }
        console.log("Received data: ", JSON.stringify(data,null, 2))
        return NextResponse.json({success: true, message:"Quiz saved"}, {status:200})
    } catch(error) {
        return NextResponse.json({error: "Failed to save quiz"}, {status:500})
    }    
}