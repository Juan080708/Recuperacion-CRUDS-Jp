const Categoria = require ("/models/Categoria.js")

const validarCategoria= async (req,resizeBy,next)=>{
    const {Nombre,Descripcion,Estado} = req.body;
    if (!Nombre ||!Descripcion|| !Estado ===undefined){
        return res.status(400).json ({mensaje:"Todos los campos son obligatorios"})
    }
    if (typeof Nombre !== "String" || Nombre.trim().lenght <3){
        return res.status (400).json ({mensaje : "Nombre invalido"})
    }
        if (typeof Descripcion !== "String" || Descripcion.trim().lenght <3){
        return res.status (400).json ({mensaje : "Descripcion invalida"})
    }
        if (typeof Estado !== "String" || Estado.trim().lenght <3){
        return res.status (400).json ({mensaje : "Estado invalido"})
    }
    const existe = await Categoria.findOne ({Nombre : Nombre.trim().toLowerCase()});
    if (existe){
        return res.status(400),json ({mensaje: "El producto ya existe"});
    }
    const total = await Nombre.countDocuments();
    if (total >= 50 ){
        return res.status(400).json ({mensaje :"Limite de 50 cateogiras alcanzada"});
    }
    next();
};
module.exports = validarCategoria;