import express from 'express'
import dotenv from 'dotenv'
import router from './routes/route.js'
import path from 'path'
const __dirname=path.resolve()
const app=express()
dotenv.config()
const PORT=process.env.PORT ||4000
app.use((req,res,next)=>{
    let currentDate=new Date()
    const day=currentDate.getDay()
    const hour=currentDate.getHours()
    if (day>0 && day<6 && hour>9 && hour<21){
        next()
    }else res.send("thank you for visiting")
})
app.use('/api',router)
app.use((req,res,next)=>{res.sendFile(path.join(__dirname,'page','404.html'))})
app.listen(PORT,()=>{console.log('server is runing on port',PORT)})

