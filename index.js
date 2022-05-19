var express = require("express");
var app = express();
var ejs = require("ejs")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended:true}));
var path = __dirname + "/src/views";


app.set("views",path);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/src/views"))
var datos = require("./src/models/datos")
mongoose.connect(
    "mongodb+srv://Laiton785:LaitonMongo1@cluster0.vy8yi.mongodb.net/Base_Login?retryWrites=true&w=majority"
)
.then(function(db){
    console.log("Conectado a nuestra base de datos")
})
.catch(function(err){
    console.log(err)
});

app.get("/",function(req,res){
    res.render('index')
});

app.post("/formulario",async function(req,res){
    var email = req.body.inpEmail
    var contra = req.body.inpContra
    //var em = {"_id:"62858d97379bee94fac9aaa4}
    var datosD = await datos.find(em)
   //if(email && contra === )
   console.log(datosD)
    res.render('formulario')
});






app.listen(3000);


