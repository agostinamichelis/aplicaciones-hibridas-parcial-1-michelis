import mongoose from "mongoose";

const frutasSchema = new mongoose.Schema({
    nombre_fruta: {
        type: String, 
        required: true
    },
    tipo: {
        type: String, 
        required: true
    }, 
    poder_fruta: {
        type: String, 
        required: true
    },
    consumida_actualmente: {
        type: Boolean, 
        required: true
    },
    consumidor_actual: {
        type: String, 
        required: true
    },
    imagen: {
        type: String, 
        required: true
    }
})



export default mongoose.model("frutasdeldiablos", frutasSchema);