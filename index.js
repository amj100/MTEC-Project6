const express = require("express")
const path = require("path")
const fs = require("fs").promises
const port = process.env.PORT || 3000

const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", async (req, res) => {
	res.redirect("/users")
})
app.get("/users", async (req, res) => {
	let list = {}
	try {
		let data = await fs.readFile(path.join(__dirname, "users.json"), "utf8")
		list = JSON.parse(data)
	}
	catch(e) {
		list = {}
	}
	res.render("users", {list: list})
})
app.get("/create_user", async (req, res) => {
	res.render("create_user")
})
app.post("/create_user", async (req, res) => {
	let id = req.body.id
	let name = req.body.name
	let email = req.body.email
	let age = req.body.age
	let list = {}
	try {
		let data = await fs.readFile(path.join(__dirname, "users.json"), "utf8")
		list = JSON.parse(data)
		if (id && name && email && age && !list[id]) {
			list[id] = {
				id: id,
				name: name,
				email: email,
				age: age
			}
		}
		await fs.writeFile(path.join(__dirname, "users.json"), JSON.stringify(list), "utf8")
	}
	catch(e) {
		list = {}
	}
	res.redirect("/users")
})

app.use(async (req, res) => {
	res.redirect("/")
})

app.listen(port, async () => {
	console.log(`Listening on port ${port}!`)
})