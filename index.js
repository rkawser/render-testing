const express =require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;





app.get('/',(req,res)=>{
    res.send('my code is working')
})

app.listen(port,()=>{
    console.log('listen to port',port)
})