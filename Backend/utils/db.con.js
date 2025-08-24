import mongoose from 'mongoose'

const ConnectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${con.connection.host}`)
    } catch (error) {
        console.log(`error : ${error.message}`)
        process.exit(1)
    }
}

export default ConnectDb