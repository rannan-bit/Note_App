"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";




export default function Register() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({
        name: "", email: "", password: ""
    })
    // console.log(userDetails);
    const handleRegister = async (e: any) => {
        e.preventDefault()
        const { name, email, password } = userDetails
        if (!name || !email || !password) {
            toast.error("Please fill the form completely")
        }
        else {
            const res = await fetch('/api/register', {
                method: "POST",
                body: JSON.stringify(userDetails)
            })
            // console.log(res);
            
            const serverResponse = await res.json()
            // console.log(serverResponse);
            if (res.status == 201) {
                toast.success(serverResponse.message)
                router.push('/login')
            }
            else {
                toast.error(serverResponse.message)
            }

        }
        setUserDetails({ name: "", email: "", password: "" })
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-400 rounded p-5">
                <h1 className="text-center text-xl font-bold">Note Hub</h1>
                <p className="text-center my-2">Register</p>
                <form onSubmit={handleRegister} >
                    <div className="my-2 p-2">
                        <input value={userDetails.name} onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} className="bg-white text-black p-2 rounded w-full" type="text" placeholder="Username" />
                    </div>
                    <div className="my-2 p-2">
                        <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} className="bg-white text-black p-2 rounded w-full" type="text" placeholder="Email" />
                    </div>
                    <div className="my-2 p-2">
                        <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} className="bg-white text-black p-2 rounded w-full" type="text" placeholder="password" />
                    </div>
                    <div className="flex items-center flex-col">
                        <button type="submit" className="bg-white p-2 rounded">Register</button>
                        <p className="text-white my-2">Already a user? click here to <Link className="text-blue-600 underline" href={'/login'}>Login</Link></p>
                    </div>
                </form>


            </div>
        </div>
    )
}