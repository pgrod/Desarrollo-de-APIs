const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        "id":"1",
        "nombre":"Electronica",
    })
})




app.listen(PORT,()=>{
    console.log("Server started on port "+PORT);
})