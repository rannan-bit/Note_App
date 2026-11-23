import { connectDB } from "@/lib/mongodb";

import notes from '@/models/noteModel'
import { NextRequest, NextResponse } from "next/server";

//post notes
export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const body = await req.json()
        const newNote = await notes.create(body)
        return NextResponse.json(
            {
                message: "Note added successfully",
                data: newNote
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Something went wrong",
                data: {}
            },
            {
                status: 500
            }
        )
    }
}
//get all notes
export async function GET(req: NextRequest) {
    try {
        await connectDB()
        const allNotes = await notes.find()
        return NextResponse.json(
            {
                message: "all notes",
                data: allNotes
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Something went wrong",
                data: {}
            },
            {
                status: 500
            }
        )
    }
}
