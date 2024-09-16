import { pool } from "../db.js";

export const ProductsGet = async (req, res) => {
    const [result] = await pool.query('select * from products');
    res.json(result);
}

export const ProductsCreate = async (req, res) => {
    const { descripcion, nombre, precio } = req.body;

    const [filas] = await pool.query(
        'insert into products(descripcionoucr,nombreoucr,preciooucr) values(?,?,?)',
        [descripcion, nombre, precio]);

    res.send({ filas });
}

export const ProductsDelete = async (req, res) => {
    const { id } = req.body;

    const [DeleteRaw] = await pool.query(
        'delete from products where id = ?',
        [id]
    );
    res.send({ DeleteRaw });
}

export const ProductsUpdate = async (req, res) => {

    const { id, descripcion, nombre, precio } = req.body;

    const ProductExist = await ProductstId(id);

    if (!ProductExist) {
        res.send('no se encontro el id')
    }
    else{

        const [UpdateRaws] = await pool.query(
            'update products set descripcionoucr = ?, nombreoucr = ?, preciooucr = ? where id = ?',
            [descripcion, nombre, precio, id]
        );
        res.send({ UpdateRaws });
    }
}

export const ProductstgetId = async (req, res) => {
    const { id } = req.body;

    const ProductExist = await ProductstId(id);
    console.log(ProductExist)
    if (!ProductExist) {
        res.send('no se a encontrado el id');
    }
    else {
        res.send(ProductExist);
    }
}
export const ProductstId = async (id) => {
    const [searchId] = await pool.query('select * from products where id = ?', [id]);

    if (searchId.length === 0) {
        return false;
    }
    else {
        return searchId[0];
    }
}