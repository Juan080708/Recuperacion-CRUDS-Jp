const router = require ("express").Router;
    const Producto = require ("/models/Productos.js");

    router.post ("/",async (req,res)=>{
        try{
            res.status (201).json (await Producto.Create(req,body));
        }catch(e){
            res.status(400).json({mensaje:"Dato invalido"});
        }
    });

router.get("/",async (req,res)=>
{
    try{
        res.json(await Producto.find());
    }
    catch (e){
        res.status(500).json ({mensaje : "Error al consultar"});
    }
});


router.get("/: id", async (req,res)=>{
    try{
        const Producto = await Producto.findById(req.params.id);
        if(!Producto) return res.status (404).json ({mensaje: "No encontrado"});
        res.json (Producto);
    }catch (e){
        res.status (400).json ({mensaje : "ID invalido"});
    }
});

router.put ("/:id",async (req,res)=>{
    try{
        const Producto = await Producto.findByIdAndUpdate(
            req.params.id,req.body ,{new:true,runValidatos:true}
        );
        if(!Producto)return res.status (404).json ({mensaje : "Producto no encontrado"});
        res.json(Producto);
    }catch (e){
        res.status(404).json ({mensaje :"Producto invalido"});
    }
});

router.delete ("/:id",async (req,res)=> {
    try{
        const Producto = await ProductofindByIdAndDelete(req.params.id);
        if (!Producto)return res.status (404).json ({mensaje :" No encontrado"});
        res.json ({mensaje : "Usuario eliminado"})
    }catch (e){
        res.status (400).json ( {mensaje : " Id invalido"});
    }
});
module.exports = router;