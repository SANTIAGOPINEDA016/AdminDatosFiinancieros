const express = require("express")
const router = express.Router()
const gastosController = require("../controller/gastos.controller")
const categoriasController = require("../controller/categorias.controller")

router.get("/gastos", gastosController.obtenerGastos)
router.get("/categorias", categoriasController.obtenerCategorias)

module.exports = router