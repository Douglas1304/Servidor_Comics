import { Router } from "express";
import { UpdateComicsById, addComic, deleteComicById, getComics } from "../controllers/comics.controller";
import { addPrestamo, deletePrestamoById, getPrestamos, getValidarRegistro } from "../controllers/prestamos.controller";

const router = Router()
//obtener
router.get('/comics', getComics)
router.get('/prestamos', getPrestamos)
router.get('/prestamos/:id', getValidarRegistro)
//crear
router.post('/comics', addComic)
router.post('/prestamos', addPrestamo)

//router.get('/comics/count')
//obtenerporid
//router.get('/comics/:id')
//Eliminar
router.delete('/comics/:id', deleteComicById)
router.delete('/prestamos/:id', deletePrestamoById)
//Actualizar
router.put('/comics/:id', UpdateComicsById)


export default router