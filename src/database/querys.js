//consultas 
export const queriesComics = {
    obtenerComics: "select * from tbl_comics where estado=1",
    agregarComic: "INSERT INTO tbl_comics (nombre,descripcion,editorial,fecha,categoria,estrellas,estado) VALUES (@name,@description,@editorial,@fecha,@categoria,@estrellas,@estado)",
    eliminarComic: "DELETE FROM tbl_comics where id=@id",
    actualizarComic: "UPDATE tbl_comics SET nombre=@name, descripcion=@description, editorial=@editorial,fecha=@fecha,categoria=@categoria,estrellas=@estrellas,estado=@estado WHERE id=@id"


}

export const queriesPrestamos = {
    obtenerPrestamos: 'select nombre, descripcion, estrellas,persona,fecha_prestamo from tbl_comics inner join tbl_prestamos on id=id_comic',
    agregarPrestamo:"INSERT INTO tbl_prestamos (id_comic,persona,fecha_prestamo) VALUES (@id,@persona,@fecha) UPDATE tbl_comics SET estado=@estado WHERE id=@id",
    eliminarPrestamo:"DELETE FROM tbl_prestamos where id_comic=@id UPDATE tbl_comics SET estado=@estado WHERE id=@id",
    validarPrestamo:"select count (*) from tbl_prestamos where id_comic=@id"
}