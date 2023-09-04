const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

//import route handlers
const router = require('./routers/router')

//parse requests
app.use(express.json());
//handle requests for static files
// app.use(express.static('assets'));
//route handlers
app.use('/routerpath', router)


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../../src/index.html'))
})



app.listen(port, ()=>{
    console.log(`server is listening at ${port}`)
})
