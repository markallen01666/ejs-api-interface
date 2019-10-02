// Return employee data as JSON

const Employees = require('../models/Employees.js')

module.exports = async (req, res) => {
  const employees = await Employees.find({})
  res.render("staff", {
    employees
  })
}
