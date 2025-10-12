import { db } from "@/lib/firebase";
import { get, ref } from "firebase/database";
import { NextResponse } from "next/server";

export async function GET(_, {params}) {
    const snapshot = await get(ref(db, `quizzes/${params.id}`))
    if(snapshot.exists()) {
        return NextResponse.json(snapshot.val(), {status: 200})
    } else {
        return NextResponse.json({error: "Quiz not found"}, {status: 404})
    }
}