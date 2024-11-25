import express from "express"
import cors from'cors'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"
await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected database!')
})
import RootRouter from "./routes/index.js"
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', RootRouter);
app.get('', (req, res) => {
    res.send('Hello!');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running!');
});