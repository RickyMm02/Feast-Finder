import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config.js"
import cartRouter from './routes/cartRoute.js';

//app config
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

//Db connection
connectDb();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get('/', (req, res) => {
  res.send("API working")
} )

app.listen(port,()=>{
  console.log(`Server started on http://localhost:${port}`);
});