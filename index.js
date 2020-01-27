const express = require("express")
const path = require("path")
const port = process.env.PORT || 3000

const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.get("/", (req, res) => {
	res.render("index", {title: "test", message: "a message", partialVariable: "[this is a partial variable]"})
})

app.listen(port, () => {
	console.log(`Listening on port ${port}!`)
})