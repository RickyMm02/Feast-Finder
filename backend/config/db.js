import mongoose from 'mongoose';


export const connectDb = async ()=>{
  await mongoose.connect('mongodb://localhost:27017/feastFinderDb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>console.log("Db connected"))
}