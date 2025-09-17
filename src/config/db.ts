
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("Database connected!")
    } catch (error) {
        console.error("Error connecting to Database", error)
        process.exit(1)
    }
}

export default connectDB;