const modelo = require("../models/categorias.model")

class CategoriasController {

    static async obtenerCategorias(req, res) {
        try {
            const datos = await modelo.obtenerCategorias()
            return res.json({ datos })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Error al consultar categorías" })
        }
    }
}

module.exports = CategoriasController