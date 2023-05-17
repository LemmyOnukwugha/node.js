const express = require("express")
const productRoute = require("./routes/product")

const app = express()

app.use(express.json())

// api routes
app.use("/api/v1", productRoute)

// Not Found middleware
app.use(function (req, res, next) {
  res.status(404).json({ message: "Not found" })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`)
})
