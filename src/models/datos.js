var mongoose = require("mongoose");
var Squema = mongoose.Schema;

var datosDigitados = new Squema({
    email:String,
    password:Number
});

module.exports = mongoose.model("datos", datosDigitados);