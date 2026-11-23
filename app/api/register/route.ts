import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import users from '@/models/userModel'
import bcrypt from "bcryptjs";



//register controller :POST
export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const { name, email, password } = await req.json()
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ message: "Already Registered...Please Login", data: {} }, { status: 409 })
        }
        else {
            const encryptedPassword = await bcrypt.hash(password, 10)
            const newUser = await users.create({ name, email, password: encryptedPassword })
            return NextResponse.json({ message: "User Registered Successfully", data: newUser }, { status: 201 })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong", data: {} }, { status: 500 })

    }
}