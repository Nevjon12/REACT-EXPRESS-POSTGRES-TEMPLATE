const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

//import route handlers
const itemRouter = require('./src/server/routers/itemRouter')

//parse requests
app.use(express.json());
//handle requests for static files
app.use(express.static('client'));

//route handlers
app.use('/items', itemRouter)


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './src/client/index.html'))
})



app.listen(port, ()=>{
    console.log(`server is listening at ${port}`)
})
