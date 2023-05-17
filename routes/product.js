const express = require("express")
const {
  getProducts,
  addProduct,
  getSingleProduct,
} = require("../controllers/productController")

const router = express.Router()

router.get("/products", getProducts)

router.post("/products", addProduct)

router.get("/products/:id", getSingleProduct)

module.exports = router
