const mongoose = require ("mongoose");

const Productos = mongoose.model ("Productos", new mongoose.Schema ({
    Nombre : {
        type: String, 
        required: true,
        trim: true,
        minlength: 2
    },
        Descripcion : {
        type: String, 
        required: true,
        trim: true,
        minlength: 2
    },
    Precio :{
        type: Number,
        required: true ,
        min: 0.01
    },
        Marca : {
        type: String, 
        required: true,
        trim: true,
        minlength: 2
    },
    Stock :{
        type: Number,
        required: true,
        min:0,
        validate: Number.isInteger 
    }
}));

module.exports = Productos ;