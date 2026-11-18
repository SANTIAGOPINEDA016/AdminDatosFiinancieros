const database = require("../db/conexion_db")

class GastosModel {

    static async obtenerGastos() {
        const [resultado] = await database.query("SELECT * FROM registros")
        return resultado
    }

}

module.exports = GastosModel