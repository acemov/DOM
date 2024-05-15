const express = require("express")
const path = require("path")
const app = express()
const oneRouter = require("./routes/one.js")

app.set('views', path.join(__dirname, 'views')) //para ver las vistas
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "../public")))

app.use("/vistaOne",oneRouter)

app.listen(3000, () => { console.log("Open") })