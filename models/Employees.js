// Employees database schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const EmployeeSchema = new Schema({
  staffId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  office: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  telephone: {
    type: String
  },
  email: {
    type: String
  }
})

EmployeeSchema.plugin(uniqueValidator) // Handle error on duplicate staff ID

const Employee = mongoose.model('Employee', EmployeeSchema)
module.exports = Employee
