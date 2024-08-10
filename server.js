const express = require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv')


//dotenv config
dotenv.config();

//rest object
const app =express();

//middlewares
app.use(express.json())
app.use(moragan('dev'))

//routes
app.get('/',(req,res)=>{
    resstatus(200).send({
        message:"server running",
    });
});


const port=process.env.PORT || 8080

//listen port
app.listen(port,()=>{
    console.log(`server running in ${process.env.NODE_MODE} mode on port ${port}`.bgCyan.white)
})