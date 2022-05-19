var mongoose = require("mongoose");
var Squema = mongoose.Schema;

var datosDigitados = new Squema({
    email:String,
    contraseña:String
});

module.exports = mongoose.model("datos", datosDigitados);