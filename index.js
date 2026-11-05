require ("dotenv").config ();

const express = require ("express");
const cors = require ("cors")
const conectarDB = require ("/config/database.js")

const app = express ();
app.use(cors ());
app.use(express.json ());
app.get ("/", (req,res)=>{
    res.json ({mensaje: "API funcionando"});
});

app.use("/api/Categoria",require("/routes/Categoria"));
app.use("/api/Producto",require("/routes/Productos"));


app.use ((req,res)=> {
    res.status (404).json ({mensaje :"Ruta no encontrada"});
});
    conectarDB ().then (()=>{
           app.listen (process.env.PORT || 3000, "0.0.0.0",()=>{
            console.log ("Servidor funcionando");
           });
    });
    
    