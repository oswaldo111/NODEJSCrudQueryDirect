import { pool } from "../db.js";

export const CategoriaGetAll = async (req, res) =>{
    const [categorias] = await pool.query('select * from categorias');
    console.log('fkfkf');
    if (categorias.length == 0) {
        res.send('no hay ninguna categoria');
    } else {
        res.send(categorias);
    }
}

export const CategoriaCreate = async (req, res) =>{
    const {nombre, descripcion, fecha} = req.body;
    const [createCategorias] = await pool.query(
        'insert into categorias (nombre, descripcion, fecha) values(?, ?, ?)',
        [nombre, descripcion, fecha]
    );

    if (createCategorias.affectedRows == 0) {
        res.send('no se creo la categoria');
    } else {
        res.send(createCategorias);
    }
}

export const CategoriaGetById = async (req, res) =>{
    const {id} = req.params;
    console.log(id);
    const [categorias] = await pool.query('select * from categorias where id = ?',
        id
    );

    if (categorias.length == 0) {
        res.send('no hay ninguna categoria');
    } else {
        res.send(categorias);
    }
}
