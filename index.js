const express = require('express');
const bodyParser = require('body-parser');
const venom = require("./venom/send.js");

const app = express();
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.post("/",function(req,res){
    var cell = req.body.cell;
    var msg = req.body.msg;
    console.log(cell,msg)
    const resultSend = venom.send(cell,msg)
    res.send(resultSend)
});

app.listen(3000, function(){
    console.log("server is running on port 3000")
})