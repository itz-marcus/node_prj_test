import { fruitRouter } from './routes/fruitRouter.js'
import { userRouter } from './routes/userRouter.js'
import express from 'express'
import cors from 'cors'

let port = process.env.PORT || 5003
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))

app.use('/user',userRouter)

app.use('/fruit',fruitRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})