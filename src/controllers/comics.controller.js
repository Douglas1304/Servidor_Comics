import { getConnection, sql, queriesComics, queriesPrestamos } from "../database";

//Listar comics
export const getComics = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesComics.obtenerComics)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
}
//agregar comic
export const addComic = async (req, res) => {

    const { name, description, editorial, fecha, categoria } = req.body;
    //le pongo un let para luego evaluar si es null y en debido caso poder asignarle un valor 
    let { estrellas } = req.body;
    let estado = 1;

    if (name == null || description == null || editorial == null) {
        return res.status(400).json({ msg: 'Bad Request .Please fill all fields' })
    }

    if (estrellas == null) estrellas = 0


    try {
        const pool = await getConnection();
        await pool.request()
            .input("name", sql.Text, name)
            .input("description", sql.Text, description)
            .input("editorial", sql.Text, editorial)
            .input("fecha", sql.Text, fecha)
            .input("categoria", sql.Text, categoria)
            .input("estrellas", sql.Int, estrellas)
            .input("estado", sql.Int, estado)
            .query(queriesComics.agregarComic)

        res.json({ name, description, editorial, fecha, categoria, estrellas, estado })
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
};

//Eliminar un comic por id
export const deleteComicById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()
    const result = await pool.request().input('id', id).query(queriesComics.eliminarComic);
    console.log(result);
    res.sendStatus(204);
};

export const UpdateComicsById = async (req, res) => {
    const { name, description, editorial, fecha, categoria } = req.body;
    const { id } = req.params;
    let { estrellas } = req.body;
    let estado = 1;
    if (name == null || description == null, editorial == null, fecha == null, categoria == null) {
        return res.status(400).json({ msg: 'Bad Request .Please fill all fields' })
    }
    if (estrellas == null) estrellas = 0
    const pool = await getConnection()
    await pool.request()
        .input("name", sql.Text, name)
        .input("description", sql.Text, description)
        .input("editorial", sql.Text, editorial)
        .input("fecha", sql.Text, fecha)
        .input("categoria", sql.Text, categoria)
        .input("estrellas", sql.Int, estrellas)
        .input("estado", sql.Int, estado)
        .input("id", sql.Int, id)
        .query(queriesComics.actualizarComic);

    res.json({ name, description, editorial, fecha, categoria, estrellas, estado });
};