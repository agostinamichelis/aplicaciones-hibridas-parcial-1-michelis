import Personaje from "./../models/personajes_model.js";





/**
* Obtiene todos los personajes
*/
async function getPersonajes() {
    let personajes = await Personaje.find();
    return personajes;
}
/**
* Obtiene un personaje por {id}
*/
async function getPersonajeId(id) {
    let personaje = await Personaje.find({ "_id": id });
    return personaje;
}






/**
* Obtiene todos los personajes en orden alfabético por {nombre}
*/
async function getPersonajesOrdenAlfabeto(nombre) {
    let personajes = await Personaje.find().sort({ nombre: 1 });
    return personajes;
}
/**
* Obtiene todos los personajes en orden por {edad}
*/
async function getPersonajesOrdenEdad(edad) {
    let personajes = await Personaje.find().sort({ edad: 1 });
    return personajes;
}







/**
/**
* Obtiene un personaje por {nombre}
*/
async function getPersonajeNombre(nombre) {
    let personaje = await Personaje.find({ "nombre": nombre });
    return personaje;
}
/**
* Obtiene un personaje por {fruta}
*/
async function getPersonajeFruta(body) {
    let personaje = await Personaje.find({ fruta_del_diablo: body.fruta_del_diablo });
    return personaje;
}
/**
* Obtiene un personaje por {zona}
*/
async function getPersonajesZona(body) {
    let personaje = await Personaje.find({ "origen.zona": body.zona });
    return personaje;
}







/**
* Eliminar un personaje
*/
async function deletePersonaje(id) {
    const personaje = await Personaje.findByIdAndDelete(id); 
    return personaje;
};
/**
* Modificar un personaje
*/
async function updatePersonaje(nombre, body) {
    
    let personaje = Personaje.updateOne({"nombre": nombre}, {
        $set: {
            nombre: body.nombre,
            apellido: body.apellido,
            pronunciacion: body.pronunciacion,
            nombre_japones: body.nombre_japones,
            descripcion: body.descripcion,
            edad_actual: body.edad_actual,
            fecha_de_nacimiento: body.fecha_de_nacimiento,
            'origen.$[elem].zona': body.zona,
            'origen.$[elem].aldea': body.aldea,
            fruta_del_diablo: body.fruta_del_diablo,
            raza: body.raza,
            imagen: body.imagen,
            tripulacion: body.tripulacion,
            ocupacion: body.ocupacion,
            rol_actual: body.rol_actual,
            recompensa_actual: body.recompensa_actual,
            apodos: body.apodos,
            titulos: body.titulos,
            afiliaciones: body.afiliaciones
        }
    });
    return personaje;
}





export { getPersonajes, updatePersonaje, deletePersonaje, getPersonajeId, getPersonajeNombre, getPersonajeFruta, getPersonajesZona, getPersonajesOrdenAlfabeto, getPersonajesOrdenEdad };
