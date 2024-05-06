import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
import personaje_routes from "./routes/personajes_routes.js";
import frutas_routes from "./routes/frutas_routes.js";

/*
* Conexión a DB
*/
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Conectado a la DB"))
.catch(() => console.log("Error al conectar a la DB"));






const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use("/personajes", auth, personaje_routes);
app.use("/frutas", auth, frutas_routes);
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', ({root: path.resolve()}));
})
app.use((req, res, next) => {
    res.status(404).send("La ruta ingresada es incorrecta. Intentelo nuevamente.");
});





// http://localhost:3000/{ruta}?token=onepiece
function auth(req, res, next){
    console.log("Entered TOKEN: " + req.query.token);
    if(req.query.token === process.env.SEED){
        next();
    }else{
        res.send("No estás autenticado")
    }
}






const port = process.env.PORT || 3000;
app.listen(port);