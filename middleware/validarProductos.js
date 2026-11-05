const Productos = require ("/models/Productos.js")

const validarProductos= async (req,resizeBy,next)=>{
    const {Nombre,Descripcion,stock} = req.body;
    if (!Nombre ||!Descripcion||stock ===undefined){
        return res.status(400).json ({mensaje:"Todos los campos son obligatorios"})
    }
    if (typeof Nombre !== "String" || Nombre.trim().lenght <3){
        return res.status (400).json ({mensaje : "Nombre invalido"})
    }
        if (typeof Descripcion !== "String" || Descripcion.trim().lenght <3){
        return res.status (400).json ({mensaje : "Descripcion invalida"})
    }
    const existe = await Productos.findOne ({Nombre : Nombre.trim().toLowerCase()});
    if (existe){
        return res.status(400),json ({mensaje: "El producto ya existe"});
    }
    if (!Number.isInteger (stock)||stock<1){
        return res.status (400).json({mensaje :"Numero de stock 1"})
    }
    const total = await Nombre.countDocuments();
    if (total >= 50 ){
        return res.status(400).json ({mensaje :"Limite de 100 productos alcanzados"});
    }
    next();
};
module.exports = validarProductos;