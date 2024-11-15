import mongoose from "mongoose"; 

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connect succesfully`)
    }catch(error){
     console.log(error)
    }
}