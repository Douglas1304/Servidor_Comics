import { getConnection, sql } from "../database/connection";
import {queriesPrestamos } from "../database/querys";
//obtener lista prestamos
export const getPrestamos = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesPrestamos.obtenerPrestamos)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
}

//agregar nuevo prestamo
export const addPrestamo = async (req, res) => {

    const { id_comic, persona, fecha_prestamo } = req.body;
    //le pongo un let para luego evaluar si es null y en debido caso poder asignarle un valor 
    let estado = 0;
    if (id_comic == null || persona == null || fecha_prestamo == null) {
        return res.status(400).json({ msg: 'Bad Request .Please fill all fields' })
    }
    try {
        const pool = await getConnection();
        await pool.request()
            .input("id", sql.Int, id_comic)
            .input("persona", sql.Text, persona)
            .input("fecha", sql.Text, fecha_prestamo)
            .input("estado", sql.Int, estado)
            .query(queriesPrestamos.agregarPrestamo)
        res.json({ id_comic, persona, fecha_prestamo, estado })
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
};

//Eliminar un prestamo por id
export const deletePrestamoById = async (req, res) => {
    const { id } = req.body
    let estado = 1;
    const pool = await getConnection()
    const result = await pool.request()
        .input('id', id)
        .input("estado", sql.Int, estado)
        .query(queriesPrestamos.eliminarPrestamo);
    console.log(result);
    res.sendStatus(204);

};

//Validar registro prestamos
export const getValidarRegistro = async (req, res) => {
    const { id } = req.body
    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id)
    .query(queriesPrestamos.validarPrestamo);
    res.json(result.recordset[0][''])

}