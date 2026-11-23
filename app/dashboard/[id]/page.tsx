"use client"

import { useParams, useRouter } from "next/navigation"
import { title } from "process"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface Note {
    title: String,
    description: String
}
export default function Edit() {
    const router = useRouter()
    const { id } = useParams()
    const [notes, setNotes] = useState({ title: "", description: "" })

    const getNote = async () => {
        const res = await fetch(`/api/note/${id}`)
        const response = await res.json()
        console.log(response);
        if (response.status == 200) {
            setNotes(response.data)
        }


    }

    const handleUpdate = async () => {
        const { title, description } = notes
        if (title && description) {
            const res = await fetch(`/api/note/${id}`, {
                method: 'PUT',
                body: JSON.stringify(notes)
            })
            const response = await res.json()
            if (res.status == 200) {
                toast.success("Note updated successfully")
                router.push('/dashboard')
            }

        }
        else {
            toast.error("Enter title and description")
        }
    }

    useEffect(() => {
        getNote()
    }, [id])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-red-700 my-5 text-4xl font-bold">ADD YOUR NOTE</h1>
            <div className="rounded shadow bg-gray-300 p-2">
                <form className="p-3">
                    <div>
                        <input value={notes.title} onChange={(e) => setNotes({ ...notes, title: e.target.value })} type="text" className="p-2 border border-rose-400 rounded shadow w-full" placeholder="Title" />
                    </div>
                    <div className="my-2">
                        <input value={notes.description} onChange={(e) => setNotes({ ...notes, description: e.target.value })} type="text" className="p-2 border border-rose-400 rounded shadow w-full" placeholder="Description" />
                    </div>
                    <button type="button" onClick={handleUpdate} className="bg-rose-600 text-white font-bold w-full p-2 rounded">Update</button>
                </form>
            </div>
        </div>
    )
}