import express from "express";
import { getFrutas, getFrutaId, getFrutaNombre, getFrutasTipo, getFrutaConsumida, getFrutasOrdenAlfabeto, getFrutasOrdenConsumidas, updateFruta, deleteFruta } from "./../controllers/frutas_controller.js";
import Joi from "joi";


const ruta = express.Router();



const schema = Joi.object({
    nombre_fruta: Joi.string()
        .messages(
            { 'string.base': 'La propiedad debe ser un texto, un valor string.' }
        ),
    tipo: Joi.string()
        .messages(
            { 'string.base': 'La propiedad debe ser un texto, un valor string.' }
        ),
    poder_fruta: Joi.string()
        .messages(
            { 'string.base': 'La propiedad debe ser un texto, un valor string.' }
        ),
    consumida_actualmente: Joi.boolean()
        .messages(
            { 'boolean.base': 'La propiedad debe ser "true" o "false", un valor booleano.' }
        ),
    consumidor_actual: Joi.string()
        .messages(
            { 'string.base': 'La propiedad debe ser un texto, un valor string.' }
        ),
    imagen: Joi.string()
        .messages(
            { 'string.base': 'La propiedad debe ser un texto, un valor string.' }
        ),
});




/*
Trae todas las frutas
    -  GET localhost:3000/frutas
*/
ruta.get("/", (req, res) => {
    let resultado = getFrutas();
    resultado
        .then((frutas) => { res.status(200).json(frutas) })
        .catch((error) => { res.status(400).json(error) })
});
/*
Trae una fruta por {id}
    -  GET localhost:3000/frutas/{id}
*/
ruta.get("/:id", (req, res) => {
    let resultado = getFrutaId(req.params.id);
    resultado
        .then((tipoFruta) => { res.status(200).json(tipoFruta) })
        .catch((error) => { res.status(400).send("No estás autenticado") })
});
/*







/*
Trae un personaje por {nombre}
    -  POST localhost:3000/frutas/nombre
*/
ruta.post('/nombre', (req, res) => {
    let body = req.body;
    let resultado = getFrutaNombre(body);
    resultado
        .then((frutas) => { res.status(201).json(frutas) })
});
/*
Traer frutas por {tipo}
    -  GET localhost:3000/frutas/tipos/:tipo
*/
ruta.get("/tipos/:tipo", (req, res) => {
    let resultado = getFrutasTipo(req.params.tipo);
    resultado
        .then((frutas) => { res.status(200).json(frutas) })
        .catch((error) => { res.status(400).send("No estás autenticado") })
});
/*
Trae una fruta por {consumida}
    -  POST localhost:3000/frutas/consumida
*/
ruta.post('/consumida', (req, res) => {
    let resultado = getFrutaConsumida(body);
    resultado
        .then((fruta) => { res.status(201).json(fruta) })
});







/*
Trae todas las frutas en orden alfabético por {nombre} [A-Z]
    -  GET localhost:3000/frutas/ordenados/alfabeto
*/
ruta.get("/ordenados/alfabeto", (req, res) => {
    let resultado = getFrutasOrdenAlfabeto();
    resultado
        .then((frutas) => { res.status(200).json(frutas) })
        .catch((error) => { res.status(400).json(error) })
});
/*
Trae todos los personajes en orden por estado de {consumida} [False - True]
    -  GET localhost:3000/frutas/ordenados/consumidas
*/
ruta.get("/ordenados/consumidas", (req, res) => {
    let resultado = getFrutasOrdenConsumidas();
    resultado
        .then((frutas) => { res.status(200).json(frutas) })
        .catch((error) => { res.status(400).json(error) })
});







/*
Elimina una fruta
    -  DELETE localhost:3000/frutas/{id}
*/
ruta.delete("/:id", (req, res) => {
    let resultado = deleteFruta(req.params.id);
    resultado
        .then((fruta) => { res.status(201).json(fruta) })
        .catch((error) => { res.status(400).json(error) })
});
/*
Modifica un tipo de fruta
    -  PUT localhost:3000/frutas/{id}
*/
ruta.put("/:id", async (req, res) => {
    let body = req.body;
    const { error, value } = schema.validate({
        nombre_fruta: body.nombre_fruta,
        tipo: body.tipo,
        poder_fruta: body.poder_fruta,
        consumida_actualmente: body.consumida_actualmente,
        consumidor_actual: body.consumidor_actual,
        imagen: body.imagen
    }, { abortEarly: false }); //Me permite imprimir todos los errores, no uno solo
    if (error) {
        const erroresValidacion = error.details.map((detail) => {
            return {
                Propiedad: detail.path.join('.'), // Ruta del error como string
                Error: detail.message, // Mensaje de error
            };
        })
        return res.status(400).send({ erroresValidacion });
    }
    updateFruta(req.params.id, req.body)
        .then((tipoFruta) => {res.status(201).json(tipoFruta);})
        .catch((err) => {res.status(400).json({ error: err.message });});
})


export default ruta;