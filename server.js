
const express = require('express')
const db=require("./routes/db-config");
const cookie= require("cookie-parser");
const app = express()
const port = 4000

app.use("/js",express.static(__dirname+"/public/js"))
app.use("/css",express.static(__dirname+"/public/css"))

app.use(express.static("Public"));
app.use(express.static("views"));
app.use(express.static("controllers"));
app.use('/js', express.static('js'));
app.set("view engine","ejs");
app.set("views","./views");
app.use(cookie());
app.use(express.json());

db.connect((err)=>{
  if (err) throw err; 
  console.log("connected");
})
app.use("/",require("./routes/pages"));
app.use("/api",require("./controllers/auth"));

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
