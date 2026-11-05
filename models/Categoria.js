const mongoose = require ("mongoose");
const Categoria = mongoose.model ("Categoria", new mongoose.Schema ({
    nombre : {
        type: String,
        required:true,
        trim:true,
        minLength: 3
    },

        Descripcion : {
        type: String,
        required:true,
        trim:true,
        minLength: 3
    },
    Estado: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
        trim: true
    },
}))