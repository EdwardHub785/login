var express = require("express");
var app = express();
var ejs = require("ejs")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));
var path = __dirname + "/src/views";


app.set("views", path);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/CSS"))
app.use(express.static(__dirname + "/images"))
var DatoSquema = require("./src/models/datos");
const datos = require("./src/models/datos");

mongoose.connect(
    "mongodb+srv://Laiton785:LaitonMongo1@cluster0.vy8yi.mongodb.net/Base_Login?retryWrites=true&w=majority"
)
    .then(function (db) {
        console.log("Conectado a nuestra base de datos")
    })
    .catch(function (err) {
        console.log(err)
    });

app.get("/inicio", function (req, res) {
    res.render('index')
});

app.post("/buscar", async function (req, res) {
    var correo = req.body.inpEmail
    var clave = req.body.inpContra

    var consultaEmail = await DatoSquema.find({ $and: [{ "email": correo }, { "password": clave }] })

    if (consultaEmail == "") {
        res.render('index')
    } else {
        var dat = consultaEmail[0].email;
        var dat1 = consultaEmail[0].password;
        if (dat == correo && dat1 == clave) {
            res.render('formulario', { datos: consultaEmail })
        }
    }
});

app.post("/editar/:_id", async (req, res) => {
    var id = req.params._id
    var todo = req.body
    console.log(todo)
    var busqueda = await DatoSquema.findById(id)
        busqueda.nombre = req.body.nombre;
        busqueda.apellido = req.body.apellido;
        busqueda.usuario = req.body.usuario;
        busqueda.email = req.body.email;
        busqueda.direccion = req.body.direccion;
        busqueda.pais = req.body.selectPais;
        busqueda.estado = req.body.selectEstado;
        busqueda.cp = req.body.cp
        busqueda.checkEdad = req.body.checkEdad
        busqueda.terminos = req.body.checkTerminos
        let doc = new DatoSquema(busqueda);
        await doc.save();
    console.log(doc);
    res.render('hola', {datos:doc})
});
app.listen(3000);
