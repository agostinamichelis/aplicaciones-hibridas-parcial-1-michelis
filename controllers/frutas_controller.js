import Fruta from "./../models/frutas_model.js";





/**
* Obtiene todas las frutas
*/
async function getFrutas() {
    let frutas = await Fruta.find();
    return frutas;
}
/**
* Obtiene una fruta por {id}
*/
async function getFrutaId(id) {
    let fruta = await Fruta.find({ "_id": id });
    return fruta;
}







/**
* Obtiene una fruta por {nombre}
*/
async function getFrutaNombre(body) {
    let fruta = await Fruta.find({ nombre_fruta: body.nombre_fruta });
    return fruta;
}
/**
* Obtener frutas por {tipo}
*/
async function getFrutasTipo(tipo) {
    let frutas = await Fruta.find({ tipo: tipo });
    return frutas;
}
/**
* Obtiene un personaje por estado de {consumida}
*/
async function getFrutaConsumida(body) {
    let fruta = await Fruta.find({ consumida_actualmente: body.consumida_actualmente });
    return fruta;
}







/**
* Obtiene todos los personajes en orden alfabético por {nombre} [A-Z]
*/
async function getFrutasOrdenAlfabeto() {
    let fruta = await Fruta.find().sort({ nombre_fruta: 1 });
    return fruta;
}
/**
* Obtiene todos los personajes en orden por estado de {consumida} [False - True]
*/
async function getFrutasOrdenConsumidas() {
    let fruta = await Fruta.find().sort({ consumida_actualmente: 1 });
    return fruta;
}







/**
* Eliminar una fruta
*/
async function deleteFruta(id) {
    const fruta = await Fruta.findByIdAndDelete(id);
    return fruta;
};
/**
* Modifica una fruta
*/
async function updateFruta(id, body) {
    for (const propiedad in body) {
        if (propiedad !== '_id' && typeof body[propiedad] === 'string') {
          const existente = await Fruta.findOne({ [propiedad]: body[propiedad] });
    
          if (propiedad === 'nombre_fruta' && existente && existente._id.toString() !== id.toString()) {
            return { frutaExiste: true, mensaje: `El valor de la propiedad "${body[propiedad]}" ya existe en otra fruta.` };
          }
          if (existente && existente._id.toString() === id.toString()) {
            return { frutaExiste: true, mensaje: `El valor de la propiedad "${body[propiedad]}" ya existe en este documento.` };
          }
        }
      }

    let tipoFruta = Fruta.updateOne({"_id": id}, {
        $set: {
            nombre_fruta: body.nombre_fruta, 
            tipo: body.tipo, 
            poder_fruta: body.poder_fruta, 
            consumida_actualmente: body.consumida_actualmente, 
            consumidor_actual: body.consumidor_actual, 
            imagen: body.imagen
        }
    });
    return tipoFruta;
}





export { getFrutas, getFrutaId, getFrutaNombre, getFrutasTipo, getFrutaConsumida, getFrutasOrdenAlfabeto, getFrutasOrdenConsumidas, updateFruta, deleteFruta };