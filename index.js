const express = require("express")
const path = require("path")
let app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.get("/", (req, res) => {
	res.render("index", {title: "test", message: "a message", partialVariable: "[this is a partial variable]"})
})

app.listen(3000, () => {
	console.log("Listening on port 3000!")
})