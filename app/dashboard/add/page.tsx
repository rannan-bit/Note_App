"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"



export default function Add() {
    const router = useRouter()
    const [note, setNote] = useState({
        title: "",
        description: ""
    })
    // console.log(note);
    const handleAddNote = async (e: any) => {
        e.preventDefault()
        const { title, description } = note
        if (!title || !description) {
            toast.error("Please complete all the fields!")
        }
        else {
            const res = await fetch('/api/note', {
                method: 'POST',
                body: JSON.stringify(note)
            })
            const response = await res.json()
            // console.log(response);
            if (res.status == 201) {
                toast.success(response.message)
                setNote({ title: "", description: "" })
                router.push('/dashboard')
            }

        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-red-700 my-5 text-4xl font-bold">ADD YOUR NOTE</h1>
            <div className="rounded shadow bg-gray-300 p-2">
                <form onSubmit={handleAddNote} className="p-3">
                    <div>
                        <input onChange={(e) => setNote({ ...note, title: e.target.value })} type="text" className="p-2 border border-rose-400 rounded shadow w-full" placeholder="Title" />
                    </div>
                    <div className="my-2">
                        <input onChange={(e) => setNote({ ...note, description: e.target.value })} type="text" className="p-2 border border-rose-400 rounded shadow w-full" placeholder="Description" />
                    </div>
                    <button type="submit" className="bg-rose-600 text-white font-bold w-full p-2 rounded">ADD</button>
                </form>
            </div>
        </div>
    )
}