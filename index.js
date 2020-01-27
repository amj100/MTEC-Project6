const express = require("express")
const path = require("path")
const fs = require("fs")
const port = process.env.PORT || 3000

const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
	res.redirect("/users")
})
app.get("/users", (req, res) => {
	let list = []
	fs.readFile(path.join(__dirname, "users.json"), 'utf8', function (err, data) {
		if (err) throw err
		try {
			list = JSON.parse(data)
		}
		catch(e) {
			list = {}
		}
		res.render("users", {list: list})
	})
})
app.get("/create_user", (req, res) => {
	res.render("create_user")
})
/*
app.get("/edit_user", (req, res) => {
	res.render("edit_user")
})
*/

app.use((req, res) => {
	res.redirect("/")
})

app.listen(port, () => {
	console.log(`Listening on port ${port}!`)
})