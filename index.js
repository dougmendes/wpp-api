const express = require('express');
const bodyParser = require('body-parser');
const wpp = require("./wpp_lib/send.js");

const app = express();
app.use(bodyParser.json());

app.post("/send",function(req,res){
    var cell = req.body.cell;
    var msg = req.body.msg;
    console.log(cell,msg)
    const resultSend = wpp.send(cell,msg)
    res.sendStatus(resultSend)
});

app.listen(8080, function(){
    console.log("server is running on port 3000")
})