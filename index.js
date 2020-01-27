const express = require("express")
const path = require("path")
const port = process.env.PORT || 3000

const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
	res.redirect("/users")
})
app.get("/users", (req, res) => {
	res.render("users", {
		list: [
			{
				id: "the id",
				name: "the name",
				email: "the email",
				age: 100
			},
			{
				id: "the id",
				name: "the name",
				email: "the email",
				age: 90
			},
			{
				id: "the id",
				name: "the name",
				email: "the email",
				age: 100
			},
			{
				id: "the id",
				name: "the name",
				email: "the email",
				age: 100
			},
		]
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