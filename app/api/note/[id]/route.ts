import { connectDB } from "@/lib/mongodb";

import notes from '@/models/noteModel'
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const noteDetails = await notes.findById({ _id: id })
        return NextResponse.json(
            {
                message: "note details",
                data: noteDetails
            },
            {
                status: 200
            }
        )
    } catch (error) {
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

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const body = await req.json()
        const updatedNotes = await notes.findByIdAndUpdate({ _id: id }, body, { new: true })
        return NextResponse.json(
            {
                message: "Note updated successfully",
                data: updatedNotes
            },
            {
                status: 200
            }
        )
    } catch (error) {
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

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const deleteNote = await notes.findByIdAndDelete({ _id: id })
        return NextResponse.json(
            {
                message: "Note deleted successfully",
                data: deleteNote
            },
            {
                status: 200
            }
        )
    } catch (error) {
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