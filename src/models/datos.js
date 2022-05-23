var mongoose = require("mongoose");
var Squema = mongoose.Schema;

var datosDigitados = new Squema({
    nombre:String,
    apellido:String,
    usuario:String,
    email:String,
    password:Number,
    direccion:String,
    pais:String,
    estado:String,
    cp:Number,
    checkEdad:String,
    terminos:String
});

module.exports = mongoose.model("datos", datosDigitados);