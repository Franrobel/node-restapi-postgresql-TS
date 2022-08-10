import express from 'express' //import modulo
const app = express()

app.get("/", (req,res)=>{
    console.log('Vamos bien!!')
})
app.listen(3000, () => console.log('server on ports ', 3000))