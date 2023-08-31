const express = require('express');
require('dotenv').config();


//create app
const app = express();

//get requist 
app.get('/', (req, res)=>{
    res.json({mssg: "My App is runing"});
});


//listen 
app.listen(process.env.PORT, () => {
    console.log(`Server is runing! in port # ${process.env.PORT}`);
});