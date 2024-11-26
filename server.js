import express from "express"

const app = express()
//app.use(express.static('public'))
//app.use(express.json())

app.get("/", (req, res)=>{
   res.status(200).send("hello worlds") 
}) 

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})



