const express = require('express');
const router = express.Router();



    router.get('/',(req,res)=>{
       return res.send({data: 'get request succesful'})
    })

    router.post('/',(req,res)=>{
        return res.send('post request succesful')
    })

    router.patch('/',(req,res)=>{
        return res.send('patch request succesful')
    })

    router.delete('/',(req,res)=>{
        return res.send('delete request succesful')
    })


module.exports = router