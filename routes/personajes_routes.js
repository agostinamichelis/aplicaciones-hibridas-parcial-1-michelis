import express from "express";
import { getPersonajes, updatePersonaje, deletePersonaje, getPersonajeId, getPersonajeNombre, getPersonajeFruta, getPersonajesZona, getPersonajesOrdenAlfabeto, getPersonajesOrdenEdad } from "./../controllers/personajes_controller.js";
const ruta = express.Router();





/*
Trae todos los personajes
    -  GET localhost:3000/personajes
*/
ruta.get("/", (req, res) =>{
    let resultado = getPersonajes();
    resultado
    .then((personajes) => {res.status(200).json(personajes)})
    .catch((error) => {res.status(400).json(error)})
});
/*
Trae un personaje por {id}
    -  GET localhost:3000/personajes/{id}
*/
ruta.get("/:id", (req, res) =>{
    let resultado = getPersonajeId(req.params.id);
    resultado
    .then((personaje) => {res.status(200).json(personaje)})
    .catch((error) => {res.status(400).json(error)})
});







/*
Trae un personaje por {nombre}
    -  GET localhost:3000/personajes/nombre/{nombre}
*/
ruta.get("/nombre/:nombre", (req, res) =>{
    let resultado = getPersonajeNombre(req.params.nombre);
    resultado
    .then((personaje) => {res.status(200).json(personaje)})
    .catch((error) => {res.status(400).json(error)})
});
/*
Trae un personaje por {fruta}
    -  POST localhost:3000/personajes/fruta
*/
ruta.post('/fruta', (req, res) => {
    let body = req.body;
    let resultado = getPersonajeFruta(body);
    resultado
        .then((personaje) => {res.status(201).json(personaje)})
});
/*
Trae un personaje por {zona}
    -  POST localhost:3000/personajes/zona
*/
ruta.post('/zona', (req, res) => {
    let body = req.body;
    let resultado = getPersonajesZona(body);
    resultado
        .then((personaje) => {res.status(201).json(personaje)})
});







/*
Trae todos los personajes en orden alfabético por {nombre} [A-Z]
    -  GET localhost:3000/personajes/ordenados/alfabeto
*/
ruta.get("/ordenados/alfabeto", (req, res) =>{
    let resultado = getPersonajesOrdenAlfabeto();
    resultado
    .then((personaje) => {res.status(200).json(personaje)})
    .catch((error) => {res.status(400).json(error)})
});
/*
Trae todos los personajes en orden por {edades} [Menor a Mayor]
    -  GET localhost:3000/personajes/ordenados/edades
*/
ruta.get("/ordenados/edades", (req, res) =>{
    let resultado = getPersonajesOrdenEdad();
    resultado
    .then((personaje) => {res.status(200).json(personaje)})
    .catch((error) => {res.status(400).json(error)})
});







/*
Elimina un personaje
    -  DELETE localhost:3000/personajes/{id}
*/
ruta.delete("/:id", (req, res) =>{
    let resultado = deletePersonaje(req.params.id);
    resultado
    .then((personaje) => {res.status(201).json(personaje)})
    .catch((error) => {res.status(400).json(error)})
});
/*
Modifica un personaje
    -  PUT localhost:3000/personajes/{nombre}
*/
ruta.put("/:nombre", (req, res) =>{
    let body = req.body;
    let resultado = updatePersonaje(req.params.nombre, body);
    resultado
    .then((personaje) => {res.status(201).json(personaje)})
    .catch((error) => {res.status(400).json(error)})
})





export default ruta;