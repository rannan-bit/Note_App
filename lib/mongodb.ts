import mongoose from "mongoose";

const connection_string = process.env.DB_CONNECTION_URL as string
export const connectDB = async () => {
    try {
        const res = await mongoose.connect(connection_string)
        console.log("DB connection successfull");
        
    } catch (error) {
        console.log("DB connection fail");
        console.log(error);
        
        
    }
}