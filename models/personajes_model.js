import mongoose from "mongoose";

const origenSchema = new mongoose.Schema({
    zona: {
        type: String, 
        required: true
    },
    aldea: {
        type: String, 
        required: false
    }
});

const personajeSchema = new mongoose.Schema({ 
    nombre: {
        type: String, 
        required: true
    },  
    apellido: {
        type: String, 
        required: false
    },  
    pronunciacion: {
        type: String, 
        required: true
    },  
    nombre_japones: {
        type: String, 
        required: true
    },  
    descripcion: {
        type: String, 
        required: true
    },  
    edad_actual: {
        type: Number, 
        required: false
    },  
    fecha_de_nacimiento: {
        type: String, 
        required: false
    },  
    origen: { 
        type: origenSchema, 
        required: true 
    },
    fruta_del_diablo: { 
        type: String, 
        required: false 
    },
    raza: {
        type: String, 
        required: true
    },  
    imagen: {
        type: String, 
        required: true
    },  
    tripulacion: {
        type: String, 
        required: false
    },  
    ocupacion: {
        type: [{ type: String }], 
        required: true
    },  
    rol_actual: {
        type: String, 
        required: true
    },       
    recompensa_actual: {
        type: Number, 
        required: false
    },  
    apodos: {
        type: [{ type: String }],
        required: false
    },  
    titulos: {
        type: [{ type: String }],
        required: false
    },  
    afiliaciones: {
        type: [{ type: String }],
        required: false
    }
})

export default mongoose.model("onepieces", personajeSchema);