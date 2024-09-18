import mongoose from 'mongoose';

export const connectDb = async ()=>{
  await mongoose.connect('mongodb+srv://grayyeonmm:9j45UOwjlmSXYpKm@cluster0.1je6u.mongodb.net/FeastFinder').then(()=>console.log("Db connected"))
}