"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"






export default function Login() {
    const [userDetails, setUserDetails] = useState({ email: "", password: "" })
    // console.log(userDetails);

    const handleLogin = async (e: any) => {
        e.preventDefault()
        const { email, password } = userDetails
        if (!email || !password) {
            toast.error("Please enter the email and password")
        }
        else {
            await signIn("credentials", {
                email, password, callbackUrl: '/dashboard'
            })

        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-400 rounded p-5">
                <h1 className="text-center text-xl font-bold">Note Hub</h1>
                <p className="text-center my-2">Login</p>
                <form onSubmit={handleLogin} >
                    <div className="my-2 p-2">
                        <input onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} className="bg-white text-black p-2 rounded w-full" type="text" placeholder="Email" />
                    </div>
                    <div className="my-2 p-2 ">
                        <input onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} className="bg-white text-black p-2 rounded w-full" type="text" placeholder="password" />
                    </div>
                    <div className="flex items-center flex-col">
                        <button type="submit" className="bg-white p-2 rounded">Login</button>
                        <p className="text-white my-2">Don't have an account? click here to <Link className="text-blue-600 underline" href={'/register'}>Register</Link></p>
                    </div>
                </form>


            </div>
        </div>
    )
}