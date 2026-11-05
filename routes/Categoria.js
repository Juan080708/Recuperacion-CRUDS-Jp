const router = require ("express").Router ();
const Categoria = require ("/models/Categoria.js");
const validar = require ("/middleware/validarCategoria.js");

    router.post ("/",validar,async (req,res)=>{
        try{
            res.status (201).json (await Categoria.Create(req.body));
        }catch(e){
            res.status(400).json({mensaje:"Error al crear la categoria"});
        }
    });

router.get("/",async (req,res)=>
{
    try{
        res.json(await Categoria.find());
    }
    catch (e){
        res.status(500).json ({mensaje : "Error al consultar"});
    }
});

router.get("/: id", async (req,res)=>{
    try{
        const Categoria = await Categoria.findById(req.params.id);
        if(!Categoria) return res.status (404).json ({mensaje: "No encontrado"});
        res.json (Categoria);
    }catch (e){
        res.status (400).json ({mensaje : "ID invalido"});
    }
});

router.put ("/:id",async (req,res)=>{
    try{
        const Categoria = await Categoria.findByIdAndUpdate(
            req.params.id,req.body ,{new:true,runValidatos:true}
        );
        if(!Categoria)return res.status (404).json ({mensaje : "No encontrado"});
        res.json(Categoria);
    }catch (e){
        res.status(404).json ({mensaje :"Datos invalidos"});
    }
});

router.delete ("/:id",async (req,res)=> {
    try{
        const Categoria = await CategoriafindByIdAndDelete(req.params.id);
        if (!Categoria)return res.status (404).json ({mensaje :" No encontrado"});
        res.json ({mensaje : "Categoria eliminada"})
    }catch (e){
        res.status (400).json ( {mensaje : " Id invalido"});
    }
});
module.exports = router;