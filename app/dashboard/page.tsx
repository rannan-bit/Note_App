"use client"


import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Link from "next/link"

interface Note {
    _id: string,
    title: string,
    description: string
}
export default function Dashboard() {
    const router = useRouter()
    const [notes, setNotes] = useState<Note[]>([])
    console.log(notes);

    const fetchNote = async () => {
        const res = await fetch('/api/note')
        const response = await res.json()
        setNotes(response.data)
    }

    const removeNote = async (id: string) => {
        const res = await fetch(`/api/note/${id}`, {
            method: 'DELETE',
        })
        if (res.status == 200) {
            fetchNote()
        }
    }

    useEffect(() => {
        fetchNote()
    }, [])
    return (
        <div>
            <Header />
            <div className="min-h-screen flex flex-col w-full items-center justify-center">
                <h1 className="text-4xl font-bold p-3 text-center my-5">Notes</h1>

                {
                    notes?.length > 0 ?
                        notes?.map((note: Note) => (
                            <div className="md:grid grid-cols-4 gap-4  rounded shadow w-full p-2 space-y-4 ">

                                <div key={note?._id} className="rounded shadow bg-gray-300 p-2">
                                    <h3 className="text-center font-bold">{note?.title}</h3>
                                    <p className="text-center my-5">{note?.description}</p>
                                    <div className="flex gap-3 my-2">
                                        <button onClick={() => removeNote(note?._id)} className="bg-red-700 text-white p-1 rounded w-full">Delete</button>
                                        <button onClick={() => router.push(`/dashboard/${note?._id}`)} className="bg-gray-700 text-white p-1 rounded w-full">Edit</button>
                                    </div>
                                </div>


                            </div>
                        ))
                        :
                        <div className="flex flex-col w-full justify-center items-center">
                            <p className="text-center text-xl font-bold">No notes added</p>
                            <Link href={'/dashboard/add'} className="bg-red-500 p-2 my-3 rounded">Add Notes...</Link>
                        </div>
                }


            </div>
        </div>
    )
}