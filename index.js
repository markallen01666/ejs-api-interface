// EJS API interface
// User CRUD interface with company info API built using EJS, Node, Express, MongoDB Atlas, and Mongoose
// M Allen - 2019

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require("ejs");

// controllers
const getOfficesController = require('./controllers/getOfficesController')
const getEmployeesController = require('./controllers/getEmployeesController')
const homeController = require("./controllers/home");
const aboutController = require("./controllers/about");

// connect database
mongoose.connect('mongodb+srv://haleon55:gyc2eivi16mrejC7@cluster0-wvhp3.mongodb.net/company1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error => {
  console.log(`Mongoose connection error: ${error}`)
}))

// set up Routing
app.set("view engine", "ejs");

// Route behaviour
app.get("/", homeController);
app.get("/about", aboutController)
app.get("/offices", getOfficesController)
app.get("/staff", getEmployeesController)
app.use((req, res) => {
  res.render('404')
})


// app.get('/employees', getEmployeesController)
// app.get('/offices', getOfficesController)

// Port allocation and default for Heroku commit
let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Simple Node API started - listening on port: ${port}`)
})
