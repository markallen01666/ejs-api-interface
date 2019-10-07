// EJS API interface
// User CRUD interface with company info API built using EJS, Node, Express, MongoDB Atlas, and Mongoose
// M Allen - 2019

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// controllers
const getOfficesController = require('./controllers/getOfficesController')
const getEmployeesController = require('./controllers/getEmployeesController')
const homeController = require("./controllers/homeController");
const aboutController = require("./controllers/aboutController");
const addOfficeController = require("./controllers/addOfficeController")
const saveOfficeController = require("./controllers/saveOfficeController")
const editOfficeController = require("./controllers/editOfficeController")
const updateOfficeController = require("./controllers/updateOfficeController")
const deleteOfficeController = require("./controllers/deleteOfficeController")
const addEmployeeController = require("./controllers/addEmployeeController")
const saveEmployeeController = require("./controllers/saveEmployeeController")
const editEmployeeController = require("./controllers/editEmployeeController")
const updateEmployeeController = require("./controllers/updateEmployeeController")
const deleteEmployeeController = require("./controllers/deleteEmployeeController")

// Make Mongoose use `findOneAndUpdate()`. 
mongoose.set('useFindAndModify', false);

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
app.get("/offices/add", addOfficeController)
app.get("/offices/edit/:id", editOfficeController)
app.get("/offices/delete/:id", deleteOfficeController)
app.get("/staff", getEmployeesController)
app.get("/staff/add", addEmployeeController)
app.get("/staff/edit/:id", editEmployeeController)
app.get("/staff/delete/:id", deleteEmployeeController)
app.post("/offices/add", saveOfficeController)
app.post("/offices/edit/:id", updateOfficeController)
app.post("/staff/add", saveEmployeeController)
app.post("/staff/edit/:id", updateEmployeeController)
app.use((req, res) => {
  res.render('404')
})


// Port allocation and default for Heroku commit
let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Simple Node API started - listening on port: ${port}`)
})
