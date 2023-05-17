const Products = []

exports.getProducts = function (req, res, next) {
  res.json({ products: Products })
}

exports.addProduct = function (req, res, next) {
  Products.push(req.body)
  res.json({ products: Products })
}

exports.getSingleProduct = function (req, res, next) {
  const productId = req.params.id
  const product = Products.find((item, index) => {
    return item.id === parseInt(productId)
  })
  if (product) {
    res.json({ product: product })
  } else {
    res.json({ message: "Product not found" })
  }
}
