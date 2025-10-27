import mongoose from 'mongoose';

const supeherorSchema = new mongoose.Schema({
    /* id: { type: Number }, */
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0, required: true},
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: String,
    poderes: { type: [String], required: true },
    aliado: [String],
    enemigo: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
    
  });

const superHero = mongoose.model('SuperHero', supeherorSchema, 'Grupo-19');
export default superHero;