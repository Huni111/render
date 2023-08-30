//jshint esversion:6
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('<h1>Hello vilag!</h1>')
});


app.listen(port, ()=>{
    console.log("Server is ready on port:3000!")
})