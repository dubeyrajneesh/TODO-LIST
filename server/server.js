import express from 'express' ;
import mongoose from 'mongoose';
import dotenv from 'dotenv' ;
import Routes from './Routes/route.js'
import cors from 'cors' ;


const PORT = 8000 ;
const app = express() ;

dotenv.config() ;

app.use(cors()) ;

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true})) ;
app.use('/' , Routes)

const USERNAME= process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;


const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.ecxzhny.mongodb.net/Todo?retryWrites=true&w=majority `;
mongoose.connect(MONGODB_URL , { useNewUrlParser: true }) ;

mongoose.connection.on('connected' , ()=>{
    console.log("DB is connected")
})

mongoose.connection.on('disconnected' , ()=>{
    console.log("Oops DB is disconnected")
})

mongoose.connection.on('error', (error)=>{
    console.log("Some error while connecting to DB")
})

app.listen(PORT , ()=>{
    console.log(`You are on PORT : ${PORT}`)
})