import { db } from "@/lib/firebase";
import { get, ref, remove, set } from "firebase/database";
import { NextResponse } from "next/server";

export async function GET(_, {params}) {
    const snapshot = await get(ref(db, `quizzes/${params.id}`))
    if(snapshot.exists()) {
        return NextResponse.json(snapshot.val(), {status: 200})
    } else {
        return NextResponse.json({error: "Quiz not found"}, {status: 404})
    }
}

export async function DELETE(_,{params}) {
    const quizRef = ref(db, `quizzes/${params.id}`)
    const snapshot = await get(quizRef)
    if(!snapshot.exists()){
        return NextResponse.json({error: "Quiz not found"}, {status:404})
    }
    await remove(quizRef)
    return NextResponse.json({message: "Quiz deleted successfully"}, {status:200})
}

export async function PUT(request, {params}) {
    const quizRef = ref(db,`quizzes/${params.id}`)
    const snapshot = await get(quizRef)
    if(!snapshot.exists()) {
        return NextResponse.json({message:"Quiz not found"}, {status:404})
    }
    const newQuizData = await request.json()
    await set(quizRef, newQuizData)
    return NextResponse.json({message:"Quiz edited"}, {status:200})
}

// [C] -> [S] <get-> [DB]