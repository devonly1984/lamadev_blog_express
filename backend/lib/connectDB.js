import {connect} from 'mongoose'


export const connectDB  = async()=>{
    await connect(process.env.DATABASE_URL)
    console.log("Connected to MONGO")
}