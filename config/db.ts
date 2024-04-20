import mongoose from "mongoose"

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log('Conected to mongoDb succes')
    } catch (error) {
        console.log('Conected to mongoDb failed')
        process.exit(1)
    }
}

export default dbConnect;