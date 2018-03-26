const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
  res.send("AYAYAYAYAYA");
})
app.get('/Koekjes',(req, res)=>{
  res.send("Koekjes");
})
app.get('/html',(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.listen(8080);
