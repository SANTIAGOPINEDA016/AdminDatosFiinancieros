const modelo = require("../models/gastos.model")

class GastosController {

    static async obtenerGastos(req, res) {
        try {
            const datos = await modelo.obtenerGastos()
            return res.json({ datos })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Error al consultar gastos" })
        }
    }
}

module.exports = GastosController