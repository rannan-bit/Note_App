"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Header() {
    const handleLogout = async () => {
        await signOut({
            callbackUrl: '/login'
        })
    }
    return (
        <header className="bg-rose-600 text-white p-4 shadow">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyNotes</h1>

                <nav className="flex gap-5">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/dashboard/add">Add Note</Link>
                    <button onClick={handleLogout} className="cursor-pointer">Logout</button>
                </nav>
            </div>
        </header>
    )
}