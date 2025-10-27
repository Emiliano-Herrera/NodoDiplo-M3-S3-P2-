import express from 'express';

import { ObtenerSuperHeroePorIdController, obtenerTodosLosSuperHeroesController, buscarSuperHeroesPorAtributoController, obtenerSuperHeroesMayoresDe30Controller, crearSuperHeroeController, actualizarSuperHeroeController, eliminarSuperPorIdController, eliminarSuperPorNombreController } from '../controllers/superheroesController.mjs';
import { validarCrearSuperHeroe, validarActualizarSuperHeroe, validarId, validarNombre } from '../validation/validationRules.js';
import { handleValidationErrors } from '../validation/errorMiddleware.js';
const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', ObtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperHeroesPorAtributoController);
router.get('/heroes/mayor/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
// Nueva ruta de crear un nuevo super heroe
/* router.post('/crearSuperHeroe', crearSuperHeroeController);
router.put('/actualizarHeroe/:id', actualizarSuperHeroeController);
router.delete('/eliminarSuperID/:id', eliminarSuperPorIdController);
router.delete('/eliminarSuperNombre/:nombreSuperHeroe', eliminarSuperPorNombreController); */

// Rutas POST
router.post('/crearSuperHeroe', validarCrearSuperHeroe, handleValidationErrors, crearSuperHeroeController);

// Rutas PUT
router.put('/actualizarHeroe/:id', validarActualizarSuperHeroe, handleValidationErrors, actualizarSuperHeroeController);

// Rutas DELETE
router.delete('/eliminarSuperID/:id', validarId, handleValidationErrors, eliminarSuperPorIdController);
router.delete('/eliminarSuperNombre/:nombreSuperHeroe', validarNombre, handleValidationErrors, eliminarSuperPorNombreController);

export default router;